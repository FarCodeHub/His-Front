import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { BModalComponent } from 'src/app/Components/b-modal/b-modal.component';
import { GridColumn } from 'src/app/Components/c-grid/c-grid.component';
import { ModalConfig } from 'src/app/core/models/modal-config';
import { DataService } from 'src/app/core/services/data.service';
import { MedicalCenterModel } from 'src/app/models/medical-center-model';
import { MedicalStaffModel } from 'src/app/models/medical-staff-model';

@Component({
  selector: 'app-center-sections',
  templateUrl: './center-sections.component.html',
  styleUrls: ['./center-sections.component.scss']
})
export class CenterSectionsComponent implements OnInit {


  @Input()
  medicalCenter: MedicalCenterModel;

  sections: MedicalCenterModel[];
  dataColumns: GridColumn[] = [
    { title: "Type", field: "typeName", filterable: true, sortable: true, ascending: true },
    { title: "Title", field: "title", filterable: true, sortable: true, ascending: true },
    { title: "Phone", field: "phone", filterable: true, sortable: false, ascending: true },
    { title: "Boss", field: "boss", filterable: true, sortable: true, ascending: true }
  ];

  @ViewChild('modal') private modal: BModalComponent

  public modalConfig: ModalConfig = {
    modalTitle: "Add Section",
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
  constructor(private dataService: DataService) { }

  ngOnInit(): void {

    this.dataService.getDataByParam("centerId", this.medicalCenter.id, "MedicalSection", "GetSectionsBy").subscribe((result) => {
      this.sections = result.data;
    })

  }

  async openAddSection() {
    return await this.modal.open()
  }

  public async closeAddSection() {
    return await this.modal.close()
  }

  public addGrid(section) {
    this.sections.push(section);
  }

}
