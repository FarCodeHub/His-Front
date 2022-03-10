import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'c-toast',
  templateUrl: './c-toast.component.html',
  styleUrls: ['./c-toast.component.scss']
})
export class CToastComponent implements OnInit {

  show_status: boolean = false;
  constructor() { }

  ngOnInit(): void {

  }

  show() {
    this.show_status = true;
    setTimeout(() => {
      this.show_status = false;
    }, 10000);
  }
}
