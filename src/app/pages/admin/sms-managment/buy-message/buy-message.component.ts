import { Component, OnInit, ViewChild } from '@angular/core';
import { BModalComponent } from 'src/app/Components/b-modal/b-modal.component';
import { GridColumn } from 'src/app/Components/c-grid/c-grid.component';
import { ModalConfig } from 'src/app/core/models/modal-config';
import { MedicalCenterModel } from 'src/app/models/medical-center-model';
import { MessageModel } from 'src/app/models/message-model';

@Component({
  selector: 'app-buy-message',
  templateUrl: './buy-message.component.html',
  styleUrls: ['./buy-message.component.scss']
})
export class BuyMessageComponent implements OnInit {
  center : MedicalCenterModel;
  message : MessageModel;
  messages: MessageModel[] = [
    {"typeTitle":"بیمارستان","title":"لقمان","amount":2300,"transactionDate":"2021-08-25","statusTitle":"Non-Free","giftReason":" "},
    {"typeTitle":"کلینیک","title":"درمان","amount":0,"transactionDate":"2021-03-2","statusTitle":"Non-Free","giftReason":" "},
    {"typeTitle":"بیمارستان","title":"سلمان","amount":6000,"transactionDate":"2021-01-15","statusTitle":"Non-Free","giftReason":" "},
    {"typeTitle":"بیمارستان","title":"شفا","amount":5000,"transactionDate":"2021-04-12","statusTitle":"Non-Free","giftReason":" "},
];
  dataColumns: GridColumn[] = [
    { title: "Center Type Title", field: "typeTitle", filterable: true, sortable: true, ascending: true },
    { title: "Center Title", field: "title", filterable: true, sortable: true, ascending: true },
    { title: "Amount", field: "amount", filterable: true, sortable: true, ascending: true },
    { title: "Transaction Date", field: "transactionDate", filterable: true, sortable: false, ascending: true },
    { title: "Status", field: "statusTitle", filterable: true, sortable: false, ascending: true },
    { title: "Gift Reason", field: "giftReason", filterable: true, sortable: false, ascending: true },
  ];
  @ViewChild('modal') private modal: BModalComponent

  public modalConfig: ModalConfig = {
    modalTitle: "Buy Message",
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


  async buyMessage(){
  return await this.modal.open()
}

}
