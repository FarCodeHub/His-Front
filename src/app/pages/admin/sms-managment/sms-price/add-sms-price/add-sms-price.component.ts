import { Component, Input, OnInit } from '@angular/core';
import { OperatorModel } from 'src/app/models/operator-model';

@Component({
  selector: 'app-add-sms-price',
  templateUrl: './add-sms-price.component.html',
  styleUrls: ['./add-sms-price.component.scss']
})
export class AddSmsPriceComponent implements OnInit {

  constructor() { }


  operators: OperatorModel[] = [
    {"title":"Iraq Cell"},
    {"title":"Iraq Phone"},

];;

  ngOnInit(): void {


  }

  addSmsPrice(){

  }

}
