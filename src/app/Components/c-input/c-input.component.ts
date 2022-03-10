import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'c-input',
  templateUrl: './c-input.component.html',
  styleUrls: ['./c-input.component.scss']
})
export class CInputComponent implements OnInit {

  @Input()
  id: string;

  @Input()
  label: string;

  @Input()
  floatLabel: boolean;

  @Input()
  placeholder: string = "";
  input_placeholder: string = "";

  @Input()
  value: any;

  @Output()
  valueChange = new EventEmitter<any>();

  @Input()
  type: string = "text";

  @Input()
  enabled: boolean = true;

  @Input()
  isRequired: boolean;

  focus: boolean;

  constructor() {

  }

  ngOnInit(): void {
    this.id = this.makeid(10);
    if (this.floatLabel)
      this.input_placeholder = this.label;
    else
      this.input_placeholder = this.placeholder;
  }

  onValueChanged() {
    this.valueChange.emit(this.value);
  }

  onFocus() {
    console.log("on focus");
    this.focus = true;
    if (this.floatLabel)
      this.input_placeholder = "";
  }

  onLostFocus() {
    this.focus = false;
    if (this.floatLabel)
      this.input_placeholder = this.label;
  }

  onLabelClick() {
    console.log("label click");
    if (this.floatLabel) {
      this.focus = true;

    }
  }

  hasValue(): boolean {
    if (this.value == null)
      return false;
    else if (String(this.value).length > 0)
      return true;
    else
      return false;
  }


  makeid(length) {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() *
        charactersLength));
    }
    return result;
  }

}
