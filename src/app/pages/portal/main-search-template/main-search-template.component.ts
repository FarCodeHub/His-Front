import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/core/services/global.service';

@Component({
  selector: 'main-search-template',
  templateUrl: './main-search-template.component.html',
  styleUrls: ['./main-search-template.component.scss']
})
export class MainSearchTemplateComponent implements OnInit {

  address: string

  constructor(
    private router: Router,
    public globalService: GlobalService
  ) {
    this.setTabNavRoute("/doctors");
  }

  ngOnInit(): void {
  }

  setTabNavRoute(value) {
    this.address = value;
  }

  login() {
    this.router.navigateByUrl("/login");
  }
  initAddress(value) {

    this.router.navigate([value]);
  }
  setActiveLang(lang: string) {
    this.globalService.setActiveLang(lang);

}
}
