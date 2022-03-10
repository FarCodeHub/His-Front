import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { CToastComponent } from 'src/app/Components/c-toast/c-toast.component';
import { DataService } from 'src/app/core/services/data.service';
import { BaseValue } from 'src/app/models/base-value';
import { BaseValueType } from 'src/app/models/base-value-type';
import { ResponseResult } from 'src/app/models/response -result';
import { BaseValuesComponent } from '../base-values.component';

@Component({
  selector: 'app-add-base-value',
  templateUrl: './add-base-value.component.html',
  styleUrls: ['./add-base-value.component.scss']
})
export class AddBaseValueComponent implements OnInit {

  @ViewChild('toast')
  toast: CToastComponent;

  @Input()
  baseValueType: BaseValueType;

  constructor(private dataService: DataService,
    private baseValuesComponent: BaseValuesComponent) {

  }

  ngOnInit(): void {
    this.dataService.getDataByParam<ResponseResult<BaseValue[]>>("typeId", this.baseValueType.id, "BaseValue", "").subscribe((result) => {
      this.baseValueType.baseValues = result.data;
    })
  }

  save() {


    this.dataService.postJsonData(this.baseValueType, "BaseValueType", "").subscribe((result) => {
      this.baseValuesComponent.loadData();
      this.baseValuesComponent.closeModal(true);
    })
  }

}
