import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BModalComponent } from 'src/app/Components/b-modal/b-modal.component';
import { CToastComponent } from 'src/app/Components/c-toast/c-toast.component';
import { ModalConfig } from 'src/app/core/models/modal-config';
import { DataService } from 'src/app/core/services/data.service';
import { GlobalService } from 'src/app/core/services/global.service';
import { ResponseResult } from 'src/app/models/response -result';
import { SpecialityModel } from 'src/app/models/spaciality-model';

@Component({
  selector: 'app-specialities',
  templateUrl: './specialities.component.html',
  styleUrls: ['./specialities.component.scss']
})
export class SpecialitiesComponent implements OnInit {

  @ViewChild('modal') private modal: BModalComponent
  @ViewChild('toast')
  toast: CToastComponent;

  specialities: SpecialityModel[] = [];
  selectedSpeciality: SpecialityModel;

  public modalConfig: ModalConfig = {
    modalTitle: "Add Speciality",
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
    private globalService: GlobalService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.dataService.getData<ResponseResult<SpecialityModel[]>>("MedicalSpeciality", "GetSpecialityTree").subscribe((result) => {
      this.specialities = result.data;
      // result.data.forEach(element => {
      //   if (element.parentId == null) {
      //     this.specialities.push(element);
      //   }
      //   else {
      //     let parent = result.data.filter(x => x.id == element.parentId)[0];
      //     if (parent.children == null)
      //       parent.children = [];
      //     parent.children.push(element);
      //   }
      // });

    })
  }

  async openModal() {
    return await this.modal.open()
  }

  public async closeModal(success: boolean) {
    if (success)
      this.toast.show();
    return await this.modal.close()

  }

}
