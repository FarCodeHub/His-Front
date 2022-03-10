import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BaseValue } from 'src/app/models/base-value';

@Component({
  selector: 'app-c-filter-panel',
  templateUrl: './c-filter-panel.component.html',
  styleUrls: ['./c-filter-panel.component.scss']
})
export class CFilterPanelComponent implements OnInit {

  @Input()
  title: string;

  @Input()
  items: BaseValue[];


  @Output()
  valueChange = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onValueChanged(item: any) {
    this.valueChange.emit(item);
  }

}
