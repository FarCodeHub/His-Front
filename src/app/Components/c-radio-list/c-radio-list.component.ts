import { Component, EventEmitter, Input, NgZone, OnInit, Output } from '@angular/core';

@Component({
  selector: 'c-radio-list',
  templateUrl: './c-radio-list.component.html',
  styleUrls: ['./c-radio-list.component.scss']
})
export class CRadioListComponent implements OnInit {

  selectedItem: any;
  searchTerm: string;
  displayedData: any;
  open: boolean = false;

  @Input()
  id: string;

  @Input()
  label: string;

  @Input()
  placeholder: string;

  @Input()
  enabled: boolean;

  @Input()
  isRequired: boolean;

  _data: any[]
  @Input()
  set data(value: any[]) {

    this._data = value;
    this.displayedData = value;
  }



  @Input()
  fieldName: any;

  @Input()
  valueFieldName: any;

  @Input()
  value: any;


  @Output()
  onChange = new EventEmitter<any>();

  @Output()
  valueChange = new EventEmitter<string>();




  constructor(private ngZone: NgZone) { }

  ngOnInit(): void {
    if (this.value != undefined && this.valueFieldName != undefined)
      this.selectedItem = this.data.filter(x => x[this.valueFieldName] == this.value)[0];
    this.displayedData = this.data;
  }

  toggleOpen() {
    this.open = !this.open;
  }

  selectItem(item) {
    this.onChange.emit(item);
    this.valueChange.emit(item[this.valueFieldName]);
    this.ngZone.run(() => {
      this.selectedItem = item;
      this.searchTerm = '';
      this.displayedData = this._data;
    });

  }

  onSearch($event) {
    this.displayedData = this._data.filter(x => x[this.fieldName].toLowerCase().includes(this.searchTerm.toLowerCase()));
  }

}
