import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BModalComponent } from 'src/app/Components/b-modal/b-modal.component';
import { GridColumn } from 'src/app/Components/c-grid/c-grid.component';
import { ModalConfig } from 'src/app/core/models/modal-config';
import { DataService } from 'src/app/core/services/data.service';
import { MedicalCenterModel } from 'src/app/models/medical-center-model';
import { MedicalStaffModel } from 'src/app/models/medical-staff-model';

@Component({
  selector: 'app-center-staffs',
  templateUrl: './center-staffs.component.html',
  styleUrls: ['./center-staffs.component.scss']
})
export class CenterStaffsComponent implements OnInit {

  @Input()
  medicalCenter: MedicalCenterModel;

  staffs: MedicalStaffModel[];
  dataColumns: GridColumn[] = [
    { title: "Full name", field: "fullName", filterable: true, sortable: true, ascending: true },
    { title: "Type", field: "typeName", filterable: true, sortable: true, ascending: true },
    { title: "Age", field: "age", filterable: true, sortable: false, ascending: true },
    { title: "Sex", field: "sex", filterable: true, sortable: true, ascending: true },
    { title: "Employee Date", field: "employeeDate", filterable: true, sortable: true, ascending: true }
  ];

  @ViewChild('modal') private modal: BModalComponent

  public modalConfig: ModalConfig = {
    modalTitle: "Add Staff",
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

  constructor(private dataService: DataService) {

  }

  ngOnInit(): void {
    this.dataService.getDataByParam("centerId", this.medicalCenter.id, "MedicalStaff", "GetMedicalStaffBy").subscribe((result) => {
      this.staffs = result.data;
    })
  }

  async openAddStaff() {
    return await this.modal.open()
  }

  public async closeAddStaff() {
    return await this.modal.close()
  }

  public addGrid(staff) {
    this.staffs.push(staff);
  }

}
