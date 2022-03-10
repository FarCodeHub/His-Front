import { Component, OnInit, ViewChild } from '@angular/core';
import { BModalComponent } from 'src/app/Components/b-modal/b-modal.component';
import { GridColumn } from 'src/app/Components/c-grid/c-grid.component';
import { ModalConfig } from 'src/app/core/models/modal-config';
import { OperatorModel } from 'src/app/models/operator-model';

@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.scss']
})
export class OperatorComponent implements OnInit {


  operators: OperatorModel[] = [
    {"title":"Iraq Cell"},
    {"title":"Iraq Phone"},

];

  dataColumns: GridColumn[] = [
    { title: "Title", field: "title", filterable: true, sortable: true, ascending: true },

  ];
  @ViewChild('modal') private modal: BModalComponent

  public modalConfig: ModalConfig = {
    modalTitle: "Add Operator",
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
  constructor() { }

  ngOnInit(): void {
  }
 async addOperator(){
    return await this.modal.open()
  }

}
