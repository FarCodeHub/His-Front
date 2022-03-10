import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'c-phone-input',
  templateUrl: './c-phone-input.component.html',
  styleUrls: ['./c-phone-input.component.scss']
})
export class CPhoneInputComponent implements OnInit {

  @Input()
  id: string;

  @Input()
  label: string;

  @Input()
  placeholder: string = "";

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

  constructor() { }

  ngOnInit(): void {
  }

  onValueChanged() {
    this.valueChange.emit(this.value);
  }

}
