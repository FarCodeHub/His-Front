import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'c-multi-input',
  templateUrl: './c-multi-input.component.html',
  styleUrls: ['./c-multi-input.component.scss']
})
export class CMultiInputComponent implements OnInit {

  @Input()
  id: string;

  @Input()
  inputCount: string = "2";


  @Input()
  label: string;

  @Input()
  placeholder: string;


  @Input()
  value: string;

  @Output()
  valueChange = new EventEmitter<string>();


  @Input()
  type: string = "text";

  @Input()
  enabled: boolean;

  @Input()
  isRequired: boolean;

  inputs: string[];

  constructor() {

  }

  ngOnInit(): void {
    this.inputs = new Array(parseInt(this.inputCount));
  }

  onValueChanged() {
    let text = '';
    this.inputs.forEach(v => text += v + ' ')
    this.valueChange.emit(text);
  }

}
