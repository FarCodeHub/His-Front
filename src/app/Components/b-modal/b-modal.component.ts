import { Component, Input, OnInit, Output, TemplateRef, ViewChild, EventEmitter } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ModalConfig } from 'src/app/core/models/modal-config';


@Component({
  selector: 'b-modal',
  templateUrl: './b-modal.component.html',
  styleUrls: ['./b-modal.component.scss']
})
export class BModalComponent implements OnInit {

  @Input() public modalConfig: ModalConfig
  @ViewChild('modal') private modalContent: TemplateRef<BModalComponent>

  modalRef: NgbModalRef
  @Output()
  modalRefChange = new EventEmitter<NgbModalRef>()


  constructor(private modalService: NgbModal) { }

  ngOnInit(): void { }

  open(): Promise<boolean> {
    return new Promise<boolean>(resolve => {
      this.modalRef = this.modalService.open(this.modalContent, this.modalConfig)
      this.modalRefChange.emit(this.modalRef);
      this.modalRef.result.then(resolve, resolve)
    })
  }

  async close(): Promise<void> {
    if (this.modalConfig.shouldClose === undefined || (await this.modalConfig.shouldClose())) {
      const result = this.modalConfig.onClose === undefined || (await this.modalConfig.onClose())
      this.modalRef.close(result)
    }
  }

  async dismiss(): Promise<void> {
    if (this.modalConfig.shouldDismiss === undefined || (await this.modalConfig.shouldDismiss())) {
      const result = this.modalConfig.onDismiss === undefined || (await this.modalConfig.onDismiss())
      this.modalRef.dismiss(result)
    }
  }

}
