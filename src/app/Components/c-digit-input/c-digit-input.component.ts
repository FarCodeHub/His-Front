import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'c-digit-input',
  templateUrl: './c-digit-input.component.html',
  styleUrls: ['./c-digit-input.component.scss']
})
export class CDigitInputComponent implements OnInit {


  @Input()
  id: string;

  @Input()
  inputCount: string = "2";


  @Input()
  placeholder: string;


  @Input()
  value: string;

  @Output()
  valueChange = new EventEmitter<string>();


  @Input()
  type: string = "number";

  @Input()
  enabled: boolean;

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
