import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-phone-number',
  templateUrl: './phone-number.component.html',
  styleUrls: ['./phone-number.component.scss']
})
export class PhoneNumberComponent implements OnInit {


  @Output()
  action = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onAction() {
    this.action.emit(1);
  }

}
