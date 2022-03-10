import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { UserModel } from 'src/app/models/user-model';
import { PatientModel } from 'src/app/models/patient-model';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  currentUser: UserModel | null = null;
  currentPatient: PatientModel | null = null;

  constructor(private http: HttpClient) {
    if (localStorage.getItem('currentUser') != null)
      this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
  }

  login(userModel: UserModel) {
    const headers = { 'Content-Type': 'application/json' }
    return this.http.post<UserModel>(`${environment.apiUrl}/Auth/Login`, JSON.stringify(userModel), { headers })
      .pipe(map((user: any) => {
        // store user details and basic auth credentials in local storage to keep user logged in between page refreshes
        this.currentUser = user.data;
        localStorage.setItem('currentUser', JSON.stringify(user.data));
        // this.currentUserSubject.next(user);
        return user;
      }));
  }

  loginPatient(userModel: UserModel) {
    const headers = { 'Content-Type': 'application/json' }
    return this.http.post<PatientModel>(`${environment.apiUrl}/Auth/LoginPatient`, JSON.stringify(userModel), { headers })
      .pipe(map((result: any) => {
        // store user details and basic auth credentials in local storage to keep user logged in between page refreshes
        this.currentPatient = result.data;
        localStorage.setItem('currentPatient', JSON.stringify(result.data));
        // this.currentUserSubject.next(user);
        return result;
      }));
  }


loadCurrentUser()
{
  this.currentUser = JSON.parse(localStorage.getItem('currentUser'))
  return this.currentUser;
}
loadCurrentPatient()
{
  this.currentPatient = JSON.parse(localStorage.getItem('currentPatient'))
  return this.currentPatient;
}

setCurrentPatient(item : PatientModel)
{
  localStorage.setItem('currentPatient', JSON.stringify(item));

}
  // getDriversList(driverName:string): Observable<DriverModel[]> {

  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //     })
  //   };

  //   return this.http.get<DriverModel[]>('https://localhost:44330/api/login?driverName='+driverName,httpOptions);
  // }




  logout() {
    // remove user from local storage to log user out
    this.currentUser = null;
    localStorage.removeItem('currentUser');
    //this.currentUserSubject.next(null);
  }
}
