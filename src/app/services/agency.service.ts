import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AgencyService {
  apiBaseUrl:String='';

  constructor(public http: HttpClient) {
    this.apiBaseUrl = 'http://ignus-backend-jchiquin.c9users.io/api/agency';
  }


  getAgency(){
    return new Promise(resolve =>{
      this.http.get( '${this.apiBaseUrl}' ).subscribe(data =>{
        console.log('getting agency data');
        resolve(data);
      }, err =>{
        console.log(err);
      })
    })
  }

}
