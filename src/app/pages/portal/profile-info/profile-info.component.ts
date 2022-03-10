import { HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { BModalComponent } from 'src/app/Components/b-modal/b-modal.component';
import { CToastComponent } from 'src/app/Components/c-toast/c-toast.component';
import { ModalConfig } from 'src/app/core/models/modal-config';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { DataService } from 'src/app/core/services/data.service';
import { GlobalService } from 'src/app/core/services/global.service';
import { UploadFileService } from 'src/app/core/services/uploadFile.service';
import { BaseValueEnum } from 'src/app/enums/baseValueEnum';
import { BaseValue } from 'src/app/models/base-value';
import { FileModel } from 'src/app/models/file-model';
import { PatientModel } from 'src/app/models/patient-model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.scss']
})
export class ProfileInfoComponent implements OnInit {

  baseUrl: String = `${environment.baseUrl}`;
  files = [];

  @ViewChild("fileUpload", { static: false }) fileUpload: ElementRef;
  @ViewChild('toast')
  toast: CToastComponent;

  @ViewChild('uploadmodal') private uploadmodal: BModalComponent;
  public modalConfig: ModalConfig = {

    modalTitle: "Upload Profile Picture",
    size: 'md',
    centered: true,
    footer: true,
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


  patient: PatientModel = <PatientModel>{};

  sexes: BaseValue[]
  // = [<BaseValue>{ id: 1, title: "Male", titleLang2: "Male" },
  // <BaseValue>{ id: 2, title: "Female", titleLang2: "Female" }];
  marriage: BaseValue[]
  // = [<BaseValue>{ id: 4, title: "Marriage", titleLang2: "Marriage" },
  // <BaseValue>{ id: 5, title: "Single", titleLang2: "Single" }];

  constructor(private dataService: DataService,
    private uploadFileService: UploadFileService,
    private auth: AuthenticationService,
    private globalService: GlobalService) { }

  ngOnInit(): void {
    this.patient = this.auth.loadCurrentPatient();

    this.sexes = this.globalService.getBaseValue(BaseValueEnum.Sex);
    this.marriage = this.globalService.getBaseValue(BaseValueEnum.Marriage);
  }

  onChangePicture() {
    this.uploadmodal.open()
  }

  uploadFile(file) {
    const formData = new FormData();
    formData.append('file', file.data);
    formData.append('personId', String(this.patient.personId));
    file.inProgress = true;
    this.uploadFileService.uploadAvatar(formData).pipe(
      map(event => {
        switch (event.type) {
          case HttpEventType.UploadProgress:
            file.progress = Math.round(event.loaded * 100 / event.total);
            break;
          case HttpEventType.Response:
           {
             this.closeUploadAvatar();
            return this.patient.avatar=event.body.data;
           }

        }
      }),
      catchError((error: HttpErrorResponse) => {
        file.inProgress = false;
        return of(`${file.data.name} upload failed.`);
      })).subscribe((event: any) => {
        if (typeof (event) === 'object') {
          console.log(event.body);
        }
      });
  }
  private uploadFiles() {
    this.fileUpload.nativeElement.value = '';
    this.files.forEach(file => {
      this.uploadFile(file);
    });
  }


  onClick() {
    const fileUpload = this.fileUpload.nativeElement; fileUpload.onchange = () => {
      for (let index = 0; index < fileUpload.files.length; index++) {
        const file = fileUpload.files[index];
        this.files.push({ data: file, inProgress: false, progress: 0 });
      }
      this.uploadFiles();
    };
    fileUpload.click();
  }

  public async closeUploadAvatar() {
    return await this.uploadmodal.close()
  }
  save() {
    this.dataService.postJsonData(this.patient, "Patient", "EditPatient").subscribe((result) => {
      this.auth.setCurrentPatient(result.data);
      this.patient = this.auth.loadCurrentPatient();
      this.toast.show();
    })
  }

}
