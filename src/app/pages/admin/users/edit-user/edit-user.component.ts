import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';
import { UserModel } from 'src/app/models/user-model';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  @Input()
  user: UserModel


  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }


  editUser(item :UserModel)
  {
      if (item.lastPassword != null || item.lastPassword !="")
        item.changePassword = true
        this.dataService.postJsonData(item, "User", "EditUser").subscribe((result) => {


          
        })

  }

}
