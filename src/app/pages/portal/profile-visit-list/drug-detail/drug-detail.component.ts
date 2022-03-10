import { Component, Input, OnInit } from '@angular/core';
import { DrugModel } from 'src/app/models/drug-model';
import { PrescriptionModel } from 'src/app/models/prescription-model';

@Component({
  selector: 'app-drug-detail',
  templateUrl: './drug-detail.component.html',
  styleUrls: ['./drug-detail.component.scss']
})
export class DrugDetailComponent implements OnInit {


  @Input()
  prescriptionDrugs : DrugModel[];

  constructor() { }

  ngOnInit(): void {
 

  }

}
