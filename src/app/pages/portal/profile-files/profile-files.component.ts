import { HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { GridColumn } from 'src/app/Components/c-grid/c-grid.component';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { DataService } from 'src/app/core/services/data.service';
import { UploadFileService } from 'src/app/core/services/uploadFile.service';
import { FileModel } from 'src/app/models/file-model';
import { PatientModel } from 'src/app/models/patient-model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profile-files',
  templateUrl: './profile-files.component.html',
  styleUrls: ['./profile-files.component.scss']
})
export class ProfileFilesComponent implements OnInit {


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
  constructor(private uploadFileService: UploadFileService,
    private dataService: DataService,
    private auth: AuthenticationService) {

  }

  ngOnInit(): void {
    this.patient = this.auth.loadCurrentPatient();
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
