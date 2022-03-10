import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TranslocoService } from '@ngneat/transloco';
import { BModalComponent } from 'src/app/Components/b-modal/b-modal.component';
import { GridColumn } from 'src/app/Components/c-grid/c-grid.component';
import { ModalConfig } from 'src/app/core/models/modal-config';
import { DataService } from 'src/app/core/services/data.service';
import { GlobalService } from 'src/app/core/services/global.service';
import { MedicalCenterModel } from 'src/app/models/medical-center-model';
import { ResponseResult } from 'src/app/models/response -result';

@Component({
  selector: 'app-centers-list',
  templateUrl: './centers-list.component.html',
  styleUrls: ['./centers-list.component.scss']
})
export class CentersListComponent implements OnInit {


  centers: MedicalCenterModel[] = [];
  dataColumns: GridColumn[] = [
    { title: "Center Name", field: "title", filterable: true, sortable: true, ascending: true },
    { title: "Boss", field: "boss", filterable: true, sortable: true, ascending: true },
    { title: "Phone", field: "phone", filterable: true, sortable: true, ascending: true },
    { title: "Code", field: "code", filterable: true, sortable: false, ascending: true },
  ];

  @ViewChild('modal') private modal: BModalComponent

  public modalConfig: ModalConfig = {
    modalTitle: "Add Center",
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
    private router: Router,
    private globalService: GlobalService,
    private translate: TranslocoService) { }

  ngOnInit(): void {
    this.dataService.getData<ResponseResult<MedicalCenterModel[]>>("MedicalCenter", "GetMedicalCenters").subscribe((result) => {
      this.centers = result.data;
    })

  }

  async openAddCenter() {
    return await this.modal.open()
  }

  public async closeAddCenter() {
    return await this.modal.close()
  }

  public addToGrid(center) {
    this.centers.push(center);
  }

  onItemClicked(center: MedicalCenterModel) {
    this.globalService.setCenter(center);
    this.router.navigate(['/admin/main/center']);
  }

}
