import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BModalComponent } from 'src/app/Components/b-modal/b-modal.component';
import { GridColumn } from 'src/app/Components/c-grid/c-grid.component';
import { CToastComponent } from 'src/app/Components/c-toast/c-toast.component';
import { ModalConfig } from 'src/app/core/models/modal-config';
import { DataService } from 'src/app/core/services/data.service';
import { GlobalService } from 'src/app/core/services/global.service';
import { BaseValueType } from 'src/app/models/base-value-type';
import { ResponseResult } from 'src/app/models/response -result';
import { BaseType } from 'typescript';

@Component({
  selector: 'app-base-values',
  templateUrl: './base-values.component.html',
  styleUrls: ['./base-values.component.scss']
})
export class BaseValuesComponent implements OnInit {

  @ViewChild('toast')
  toast: CToastComponent;

  items: BaseValueType[] = [];
  selectBaseValueType: BaseValueType = <BaseValueType>{};

  dataColumns: GridColumn[] = [
    { title: "Type Name", field: "typeName", filterable: true, sortable: true, ascending: true },
    { title: "Unique Name", field: "uniqueName", filterable: true, sortable: true, ascending: true },
    { title: "Create Time", field: "createTime", filterable: true, sortable: true, ascending: true },
  ];

  @ViewChild('modal') private modal: BModalComponent

  public modalConfig: ModalConfig = {
    modalTitle: "Add Base Value",
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


  constructor(private dataService: DataService, private router: Router, private globalService: GlobalService) { }

  ngOnInit(): void {
    this.loadData()
  }

  loadData() {
    this.dataService.getData<ResponseResult<BaseValueType[]>>("BaseValueType", "").subscribe((result) => {
      this.items = result.data;
    })
  }


  async openAdd() {
    this.selectBaseValueType = <BaseValueType>{};
    return await this.modal.open()
  }

  onActionClick(e: any) {
    if (e.actionType == 'edit') {
      this.selectBaseValueType = e.data;
      this.modal.open()
    }


  }

  public async closeModal(success: boolean) {
    if (success)
      this.toast.show();
    return await this.modal.close()

  }




}
