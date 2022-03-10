import { ChangeDetectorRef, Component, EmbeddedViewRef, EventEmitter, Input, NgZone, OnInit, Output, TemplateRef, ViewContainerRef } from '@angular/core';
import Popper from 'popper.js';
import { fromEvent } from 'rxjs';
import { filter } from 'rxjs/operators';
import { GlobalService } from 'src/app/core/services/global.service';

@Component({
  selector: 'c-grid',
  templateUrl: './c-grid.component.html',
  styleUrls: ['./c-grid.component.scss']
})
export class CGridComponent implements OnInit {

  private view: EmbeddedViewRef<any>;
  private popperRef: Popper;

  @Input()
  columns: GridColumn[];

  _data: any[]
  displayedData: any[]
  @Input()
  set data(value: any[]) {

    this._data = value;
    this.displayedData = value;
  }

  @Input()
  searchField: GridColumn;

  @Output()
  onItemClick = new EventEmitter<any>();

  @Output()
  onActionClick = new EventEmitter<any>();

  searchTerm: string;
  sortedColumn: GridColumn | null = null;
  filterExpanded: boolean = false;

  constructor(private vcr: ViewContainerRef, private zone: NgZone, private cdr: ChangeDetectorRef, public globalService: GlobalService) {

  }

  ngOnInit(): void {
    if (this.columns.length > 0)
      this.searchField = this.columns[0];
  }

  onSearch($event) {
    this.displayedData = this._data.filter(x => x[this.searchField.field].toLowerCase().includes(this.searchTerm.toLowerCase()));
  }

  sort(column: GridColumn) {
    if (!column.sortable)
      return;

    this.sortedColumn = column;

    let dir = 1;
    if (!column.ascending)
      dir *= -1

    this.displayedData = this._data.sort((a, b) => (a[column.field].toLowerCase() > b[column.field].toLowerCase()) ? dir : ((b[column.field].toLowerCase() > a[column.field].toLowerCase()) ? dir * -1 : 0));
    column.ascending = !column.ascending;
  }

  onClickHandler(item: any) {
    this.onItemClick.emit(item);
  }

  onActionClickHandler(item: any, action: string) {
    this.onActionClick.emit({ data: item, actionType: action });
  }

  openAction(e) {
    e.stopPropagation();
  }

  openActions(actionsTpl: TemplateRef<any>, origin: HTMLElement, e) {
    // if (this.isopen) {
    //   this.close();
    //   return;
    // }
    e.stopPropagation();
    this.view = this.vcr.createEmbeddedView(actionsTpl);
    const dropdown = this.view.rootNodes[0];

    document.body.appendChild(dropdown);
    dropdown.style.width = `${origin.offsetWidth}px`;
    // this.isopen = true;

    this.zone.runOutsideAngular(() => {
      this.popperRef = new Popper(origin, dropdown, {
        removeOnDestroy: true,
        placement: 'top',
        modifiers: {
          offset: { offset: "0,-45" },
        },
      });
    });

    this.handleClickOutside();
  }

  close() {
    // this.isopen = false;
    this.popperRef.destroy();
    this.view.destroy();
    this.view = null;
    this.popperRef = null;
    this.cdr.detectChanges();
  }

  private handleClickOutside() {
    fromEvent(document, 'click')
      .pipe(
        filter(({ target }) => {
          const origin = this.popperRef.reference as HTMLElement;
          return origin.contains(target as HTMLElement) === false;
        }),
        // takeUntil(this.closed)
      )
      .subscribe(() => {
        this.close();

      });
  }

  setActiveLang(lang: string) {
    this.globalService.setActiveLang(lang);
  }
}

export interface GridColumn {
  title: string;
  field: string;
  filterable: boolean;
  sortable: boolean;
  ascending: boolean;
}
