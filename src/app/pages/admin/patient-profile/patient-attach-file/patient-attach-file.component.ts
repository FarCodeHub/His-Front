import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { PatientModel } from 'src/app/models/patient-model';
import { FileModel } from 'src/app/models/file-model';
import { FileUploader } from 'ng2-file-upload';
import { UploadFileService } from 'src/app/core/services/uploadFile.service';
import { catchError, map } from 'rxjs/operators';
import { HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { of } from 'rxjs';
import { DataService } from 'src/app/core/services/data.service';
import { environment } from 'src/environments/environment';
import { GridColumn } from 'src/app/Components/c-grid/c-grid.component';

const URL = `${environment.apiUrl}/File/UploadFile`;
@Component({
  selector: 'app-patient-attach-file',
  templateUrl: './patient-attach-file.component.html',
  styleUrls: ['./patient-attach-file.component.scss']
})
export class PatientAttachFileComponent implements OnInit {

  baseUrl: String = `${environment.baseUrl}`;

  allFiles: FileModel[] = <FileModel[]>[{ path: " ", fileName: "First File" }]
  dataColumns: GridColumn[] = [
    { title: "Pictures", field: "DateTime", filterable: true, sortable: true, ascending: true },
    { title: "Type", field: "DoctorName", filterable: true, sortable: true, ascending: true },
  ];

  // resetUpload: boolean;

  @Input()
  patient: PatientModel;

  // Config: AngularFileUploaderConfig ;

  @ViewChild("fileUpload", { static: false }) fileUpload: ElementRef; files = [];
  constructor(private uploadFileService: UploadFileService, private dataService: DataService) {

  }

  ngOnInit(): void {
    this.dataService.getDataByParam("patientId", this.patient.id, "Patient", "GetPatientFiles").subscribe((result) => {
      this.allFiles = result.data;

    })
  }

  uploadFile(file) {
    const formData = new FormData();
    formData.append('file', file.data);
    formData.append('patientId', String(this.patient.id));
    file.inProgress = true;
    this.uploadFileService.upload(formData).pipe(
      map(event => {
        switch (event.type) {
          case HttpEventType.UploadProgress:
            file.progress = Math.round(event.loaded * 100 / event.total);
            break;
          case HttpEventType.Response:
            return this.allFiles.push(event.body.data);
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


  search() { }
}
