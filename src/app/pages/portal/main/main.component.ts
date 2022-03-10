import { GlobalService } from './../../../core/services/global.service';
import { Component, InjectionToken, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { TranslocoService } from '@ngneat/transloco';
import { filter } from 'rxjs/operators';
import { BModalComponent } from 'src/app/Components/b-modal/b-modal.component';
import { ModalConfig } from 'src/app/core/models/modal-config';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {

  address: string
  createyourprofile:string

  @ViewChild('signupModal') private signupModal: BModalComponent;
  public modalConfig: ModalConfig = {
    name: "login",
    modalTitle: "Sign up",
    size: 'md',
    centered: true,
    footer: false,
    header: false,
    onDismiss: () => {
      return true
    },
    dismissButtonLabel: "Dismiss",
    onClose: () => {
      return true
    },
    closeButtonLabel: "Close"
  }

  @ViewChild('logimodal') private logimodal: BModalComponent;
  public modalConfigLogin: ModalConfig = {
    name: "login",
    modalTitle: "Sign up",
    size: 'md',
    centered: true,
    footer: false,
    header: false,
    onDismiss: () => {
      return true
    },
    dismissButtonLabel: "Dismiss",
    onClose: () => {
      return true
    },
    closeButtonLabel: "Close"
  }
  loginModalRef: NgbModalRef;

  constructor(private router: Router,
    public globalService: GlobalService,
    private transloco: TranslocoService) {
    }

  public setActiveLang(lang: string) {
    this.transloco.setActiveLang(lang);
  }

  ngOnInit(): void {

  }

  initAddress(value) {
    this.address = value;
  }

  setTabNavRoute(value) {
    this.address = value;
  }
  search() {
    this.router.navigateByUrl(this.address);
  }

  loginAdmin() {
    this.router.navigateByUrl('/login');
  }

  login() {
    this.logimodal.open()
  }

  closeLogin() {
    this.logimodal.close()
  }

  signup() {
    this.signupModal.open()
  }


}
