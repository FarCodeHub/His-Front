import { Component, OnInit, ViewChild } from '@angular/core';
 

@Component({
  selector: 'app-sms-managment',
  templateUrl: './sms-managment.component.html',
  styleUrls: ['./sms-managment.component.scss']
})
export class SmsManagmentComponent implements OnInit {




  page: number = 0;

  constructor() { }

  ngOnInit(): void {
  }
  setPage(page: number) {
    this.page = page;
  }
}
