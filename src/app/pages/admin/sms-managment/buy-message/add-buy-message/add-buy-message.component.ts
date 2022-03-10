import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';
import { MedicalCenterModel } from 'src/app/models/medical-center-model';
import { MessageModel } from 'src/app/models/message-model';
import { ResponseResult } from 'src/app/models/response -result';

@Component({
  selector: 'app-add-buy-message',
  templateUrl: './add-buy-message.component.html',
  styleUrls: ['./add-buy-message.component.scss']
})
export class AddBuyMessageComponent implements OnInit {


  centers : MedicalCenterModel[];

  @Input()
  message: MessageModel;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getData<ResponseResult<MedicalCenterModel[]>>("MedicalCenter", "GetMedicalCenters").subscribe((result) => {
      this.centers = result.data;
    })
  }

  addAmount(){
    
  }

}
