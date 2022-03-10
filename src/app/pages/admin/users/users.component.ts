import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BModalComponent } from 'src/app/Components/b-modal/b-modal.component';
import { GridColumn } from 'src/app/Components/c-grid/c-grid.component';
import { ModalConfig } from 'src/app/core/models/modal-config';
import { DataService } from 'src/app/core/services/data.service';
import { GlobalService } from 'src/app/core/services/global.service';
import { MedicalCenterModel } from 'src/app/models/medical-center-model';
import { ResponseResult } from 'src/app/models/response -result';
import { UserModel } from 'src/app/models/user-model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  medicalCenter: MedicalCenterModel;

  user: UserModel   = <UserModel> { fullName: "", userName: "", mobile: "", nationalCode: ""};

  users: UserModel[] = [];
  dataColumns: GridColumn[] = [
    { title: "Full Name", field: "fullName", filterable: true, sortable: true, ascending: true },
    { title: "National Code", field: "nationalCode", filterable: true, sortable: true, ascending: true },
    { title: "Mobile", field: "mobile", filterable: true, sortable: true, ascending: true },
    { title: "UserName", field: "userName", filterable: true, sortable: false, ascending: true },
  ];

  @ViewChild('modal') private modal: BModalComponent

  public modalConfig: ModalConfig = {
    modalTitle: "Add User",
    size: 'xl',
    centered: true,
    footer: false,
    header: true,
    onDismiss: () => {
      return true
    },
    dismissButtonLabel: "Dismiss",
    onClose: () => {
      return true
    },
    closeButtonLabel: "Close"
  }


  @ViewChild('editUserModal') private editUserModal: BModalComponent

  public editUserModalConfig: ModalConfig = {
    modalTitle: "Edit User",
    size: 'xl',
    centered: true,
    footer: false,
    header: true,
    onDismiss: () => {
      return true
    },
    dismissButtonLabel: "Dismiss",
    onClose: () => {
      return true
    },
    closeButtonLabel: "Close"
  }

  constructor(private dataService: DataService,
    private globalService: GlobalService, private router: Router) {
    this.medicalCenter = this.globalService.medicalCenter;
  }

  ngOnInit(): void {

    this.dataService.getData<ResponseResult<UserModel[]>>("User", "GetUsers").subscribe((result) => {
      this.users = result.data;
    })

  }


  async openAddUser() {
    return await this.modal.open()
  }

  public async closeAddUser() {
    return await this.modal.close()
  }

  public addToGrid(user) {
    this.users.push(user);
  }

  async onItemClicked(user: UserModel) {

    this.user = user;
    return await this.editUserModal.open()
   // this.router.navigate(['/admin/main/addUser', { user: JSON.stringify(user) }]);
  }

}
