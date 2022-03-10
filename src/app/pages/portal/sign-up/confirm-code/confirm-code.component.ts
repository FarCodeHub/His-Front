import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-confirm-code',
  templateUrl: './confirm-code.component.html',
  styleUrls: ['./confirm-code.component.scss']
})
export class ConfirmCodeComponent implements OnInit {

  time: string = "00:60";

  @Output()
  action = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onAction(value: number) {
    this.action.emit(value);
  }

}
