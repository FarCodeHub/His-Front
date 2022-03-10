import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/core/services/global.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor(public globalService: GlobalService) { }

  ngOnInit(): void {
  }

  setActiveLang(lang: string) {
    this.globalService.setActiveLang(lang);
  }
}
