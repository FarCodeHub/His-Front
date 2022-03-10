import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UploadFileService {
  SERVER_URL: string = `${environment.apiUrl}/File/UploadFile`;
  SERVER_URL_AVATAR : string = `${environment.apiUrl}/File/UploadAvatar`;
  constructor(private httpClient: HttpClient) { }

  public upload(formData) {

    return this.httpClient.post<any>(this.SERVER_URL, formData, {
      reportProgress: true,
      observe: 'events'
    });
  }
  public uploadAvatar(formData) {

    return this.httpClient.post<any>(this.SERVER_URL_AVATAR, formData, {
      reportProgress: true,
      observe: 'events'
    });
  }
}
