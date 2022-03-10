import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  mode: string = "phone";
  constructor() { }

  ngOnInit(): void {
  }

  action(mode: string) {
    this.mode = mode;
  }

}
