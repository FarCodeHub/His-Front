import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';



@Component({
  selector: 'c-toggle-button',
  templateUrl: './c-toggle-button.component.html',
  styleUrls: ['./c-toggle-button.component.scss']
})
export class CToggleButtonComponent implements OnInit {

  @Input()
  items: any[];

  @Input()
  isFilterSide: boolean;

  @Input()
  hideInactiveTitle: boolean = false;

  @Output()
  onSelectionChange = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(item: any) {
    this.items.map(x => x.selected = false);
    item.selected = true;
    this.onSelectionChange.emit(item);
  }

}
