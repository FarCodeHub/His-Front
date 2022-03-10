import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslocoService } from '@ngneat/transloco';
import { GlobalService } from 'src/app/core/services/global.service';
import { MedicalCenterModel } from 'src/app/models/medical-center-model';

@Component({
  selector: 'app-center-management',
  templateUrl: './center-management.component.html',
  styleUrls: ['./center-management.component.scss']
})
export class CenterManagementComponent implements OnInit {
  center: MedicalCenterModel;
  page: number = 0;

  constructor(private route: ActivatedRoute, private globalService: GlobalService,private translate : TranslocoService) {
    this.center = this.globalService.loadcenter();
    //mock data

  }

  ngOnInit(): void {
  }

  setPage(page: number) {
    this.page = page;
  }
}
