import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient) { }

  getSocietyURL = "http://betterworld.herokuapp.com/society/society";
  getBuildingsURL = "http://betterworld.herokuapp.com/society/building";
  getOwnerURL = "http://betterworld.herokuapp.com/society/owner";
  getFlatURL = "http://betterworld.herokuapp.com/society/flat";
  putPayment = "https://betterworld.herokuapp.com/society/flat/pendingPayment";

  getOwner(query): Observable<any> {
    console.log(`${this.getOwnerURL}/phonenumber/?value='${query.oPhoneNumber}'`);
    return this.http.get(`${this.getOwnerURL}/phonenumber/?value='${query.oPhoneNumber}'`)
      .pipe(catchError((error: HttpErrorResponse) => throwError(error)
      ));
  }
  getSociety(): Observable<any> {
    return this.http.get(`${this.getSocietyURL}`)
      .pipe(catchError((error: HttpErrorResponse) => throwError(error)
      ));
  }
  getSocietyInfo(id): Observable<any> {
    console.log(`${this.getSocietyURL}/societyid/?value=${id}`);
    return this.http.get(`${this.getSocietyURL}/societyid/?value=${id}`)
      .pipe(catchError((error: HttpErrorResponse) => throwError(error)
      ));
  }
  getBuilding(socID): Observable<any> {
    return this.http.get(`${this.getBuildingsURL}/societyid/?value=${socID}`)
      .pipe(catchError((error: HttpErrorResponse) => throwError(error)
      ));
  }
  getFlatList(buildingname): Observable<any> {
    console.log(`${this.getFlatURL}/buildingname/?value=${buildingname}`);
    return this.http.get(`${this.getFlatURL}/buildingname/?value='${buildingname}'`)
      .pipe(catchError((error: HttpErrorResponse) => throwError(error)
      ));
  }
  putFlatPayment(flatObj): Observable<any> {
    console.log(flatObj);
    let paramList = {
      "pendingPayment": flatObj.pendingPayment,
           "ownerid": flatObj.ownerid,
           "flatid": flatObj.flatid
   };
   console.log(paramList);
    return this.http.put(this.putPayment, paramList)
      .pipe(catchError((error: HttpErrorResponse) => throwError(error)
      ));
  }
}
