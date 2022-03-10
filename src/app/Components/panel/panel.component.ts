import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'c-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {


  @Input()
  iconClass: string;

  @Input()
  title: string;


  constructor() { }

  ngOnInit(): void {
  }

}
