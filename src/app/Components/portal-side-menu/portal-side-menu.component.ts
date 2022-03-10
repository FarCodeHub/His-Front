import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/core/services/global.service';

@Component({
  selector: 'app-portal-side-menu',
  templateUrl: './portal-side-menu.component.html',
  styleUrls: ['./portal-side-menu.component.scss']
})
export class PortalSideMenuComponent implements OnInit {

  float: boolean = false;
  @Input()
  collapsed: boolean = false;

  constructor(public router: Router, public globalService: GlobalService) { }

  ngOnInit(): void {
  }

  setActiveLang(lang: string) {
    this.globalService.setActiveLang(lang);
  }
}
