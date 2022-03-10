import { ChangeDetectorRef, Component, EmbeddedViewRef, EventEmitter, Input, NgZone, OnInit, Output, TemplateRef, ViewContainerRef } from '@angular/core';
import { fromEvent } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import Popper from 'popper.js';
import { GlobalService } from 'src/app/core/services/global.service';

@Component({
  selector: 'c-select',
  templateUrl: './c-select.component.html',
  styleUrls: ['./c-select.component.scss']
})
export class CSelectComponent implements OnInit {

  selectedItem: any = null;
  searchTerm: string;
  displayedData: any;
  private view: EmbeddedViewRef<any>;
  private popperRef: Popper;
  isopen: boolean = false;

  @Input()
  id: string;

  @Input()
  label: string;

  @Input()
  floatLabel: boolean;

  @Input()
  appearance: string = "border";//border,no-border,fill

  @Input()
  parent: string;

  @Input()
  placeholder: string;

  @Input()
  enabled: boolean;

  @Input()
  isRequired: boolean;

  _data: any[]
  @Input()
  set data(value_data: any[]) {

    this._data = value_data;
    this.displayedData = value_data;

    if (this._value != undefined && this.valueFieldName != undefined)
      this.selectedItem = this._data.filter(x => x[this.valueFieldName] == this._value)[0];

  }

  @Input()
  fieldName: any;

  @Input()
  valueFieldName: any;

  _value: any
  @Input()
  set value(value_data: any) {
    this._value = value_data;
    if (this._value != undefined && this.valueFieldName != undefined)
      this.selectedItem = this._data.filter(x => x[this.valueFieldName] == this._value)[0];

  }

  @Output()
  onChange = new EventEmitter<any>();
  @Output()
  valueChange = new EventEmitter<any>();

  constructor(private vcr: ViewContainerRef, private zone: NgZone, private cdr: ChangeDetectorRef, public globalService: GlobalService) { }

  ngOnInit(): void {

  }

  toggleOpen() {
    // this.open = !this.open;
  }

  open(dropdownTpl: TemplateRef<any>, origin: HTMLElement) {
    if (this.isopen) {
      this.close();
      return;
    }
    this.view = this.vcr.createEmbeddedView(dropdownTpl);
    const dropdown = this.view.rootNodes[0];

    document.body.appendChild(dropdown);
    dropdown.style.width = `${origin.offsetWidth}px`;
    this.isopen = true;

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
    this.isopen = false;
    // this.closed.emit();
    this.popperRef.destroy();
    this.view.destroy();
    // this.searchControl.patchValue('');
    this.view = null;
    this.popperRef = null;
    this.cdr.detectChanges();
  }

  isActive(option) {
    if (!this.selectedItem) {
      return false;
    }
    return option[this.valueFieldName] === this.selectedItem[this.valueFieldName];
  }

  selectItem(item) {
    this.onChange.emit(item);
    this.valueChange.emit(item[this.valueFieldName]);
    this.zone.run(() => {
      this.selectedItem = item;
      this.searchTerm = '';
      this.displayedData = this._data;
    });

  }

  onSearch($event) {
    this.displayedData = this._data.filter(x => x[this.fieldName].toLowerCase().includes(this.searchTerm.toLowerCase()));
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

  ngOnDestroy() { }

  setActiveLang(lang: string) {
    this.globalService.setActiveLang(lang);
  }
}
