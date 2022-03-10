import { Component, OnInit, ViewChild } from '@angular/core';
import { BModalComponent } from 'src/app/Components/b-modal/b-modal.component';
import { GridColumn } from 'src/app/Components/c-grid/c-grid.component';
import { ModalConfig } from 'src/app/core/models/modal-config';
import { SmsPriceModel } from 'src/app/models/sms-price-model';

@Component({
  selector: 'app-sms-price',
  templateUrl: './sms-price.component.html',
  styleUrls: ['./sms-price.component.scss']
})
export class SmsPriceComponent implements OnInit {

  prices: SmsPriceModel[] = [
    {"operatorTitle":"Iraq Cell","maxChar":140,"price":130},
    {"operatorTitle":"Iraq Cell","maxChar":150,"price":130},
    {"operatorTitle":"Iraq Phone","maxChar":250,"price":100},

];

  dataColumns: GridColumn[] = [
    { title: "operator", field: "operatorTitle", filterable: true, sortable: true, ascending: true },
    { title: "max Char Number", field: "maxChar", filterable: true, sortable: true, ascending: true },
    { title: "Price", field: "price", filterable: true, sortable: true, ascending: true },
  ];
  @ViewChild('modal') private modal: BModalComponent

  public modalConfig: ModalConfig = {
    modalTitle: "Add SMS Price",
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

  async addSmsPrice()
  {
    return await this.modal.open()
  }

}
