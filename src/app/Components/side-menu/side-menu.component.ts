import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { DataService } from 'src/app/core/services/data.service';
import { MenuItemModel } from 'src/app/models/menu-model';
import { UserModel } from 'src/app/models/user-model';
import { GlobalService } from '../../core/services/global.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  currentUser: UserModel;
  menus: MenuItemModel[] = [];
  submenus: MenuItemModel[] = [];
  showSubMenu: boolean = false;

  constructor(public router: Router,
    private dataService: DataService,
    private auth: AuthenticationService, public globalService: GlobalService) { }

  ngOnInit(): void {
    this.currentUser = this.auth.loadCurrentUser();
    this.dataService.postJsonData(this.currentUser, "Main", "GetMenuItems").subscribe((result) => {

      this.menus = result.data;
      console.log("menu recived");
      // result.data.some(item => {
      //   if (item.children.length == 0)
      //     this.menus.push(item)
      //   else
      //     item.children.some(item => { this.menus.push(item); })

      // })

    });
  }

  toggleSubMenu(item: MenuItemModel) {
    this.submenus = item.children;
    this.showSubMenu = !this.showSubMenu;
  }

  closeSubMenu() {
    this.showSubMenu = false;
  }

  setActiveLang(lang: string) {
    this.globalService.setActiveLang(lang);
  }

}
