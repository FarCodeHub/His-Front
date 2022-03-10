import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthenticationService } from 'src/app/core/services/authentication.service';


@Component({
  selector: 'c-button',
  templateUrl: './c-button.component.html',
  styleUrls: ['./c-button.component.scss']
})
export class CButtonComponent implements OnInit {

  @Input()
  class: string;

  @Input()
  label: string;

  @Input()
  isFlat: boolean;

  @Input()
  color: string;

  @Input()
  icon?: string;

  @Input()
  persmissionName?: string;

  @Output()
  onClick = new EventEmitter<CButtonComponent>();

  constructor(private authenticationService: AuthenticationService) {

  }

  ngOnInit(): void {
    // this.authenticationService.currentUser.pe
  }

  onButtonClicked() {
    this.onClick.emit(this);
  }

}
