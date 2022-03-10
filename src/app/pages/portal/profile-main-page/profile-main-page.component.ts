import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/core/services/global.service';

@Component({
  selector: 'app-profile-main-page',
  templateUrl: './profile-main-page.component.html',
  styleUrls: ['./profile-main-page.component.scss']
})
export class ProfileMainPageComponent implements OnInit {

  menuCollapsed = false;
  constructor(public globalService: GlobalService) { }

  ngOnInit(): void {
  }

  logout() {

  }

  onMenuStateChanged(state: boolean) {
    this.menuCollapsed = state;
  }

  setActiveLang(lang: string) {
    this.globalService.setActiveLang(lang);
  }
}
