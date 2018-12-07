import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';



const httpOptionsDefault = {
  headers: new HttpHeaders({
    
    'accessToken':localStorage.getItem('accessToken'),
    
    //'Authorization': 'Basic '+btoa('jchiquin:12345'), 
     'Content-Type': 'application/json',
     

  })
};


@Injectable({
  providedIn: 'root'
})


export class AgencyService {

  agencyUrl:string;
  typeServicesUrl:string;

  constructor(public http: HttpClient) {
    this.agencyUrl = 'http://ignus-backend-jchiquin.c9users.io/api/agency';
    this.typeServicesUrl = 'https://ignus-backend-jchiquin.c9users.io/api/typeService'
  }

  //AGENCY ENDPOINT 
  getAgency(){
    return new Promise(resolve =>{
      this.http.get( this.agencyUrl ).subscribe(data =>{
        resolve(data);
      }, err =>{
        console.log(err);
      })
    })
  }

  //SERVICE ENDPOINT
  getServices(){
    return new Promise(resolve =>{
      this.http.get( this.typeServicesUrl ).subscribe(data =>{
        resolve(data);
      }, err =>{
        console.log(err);
      })
    })
  }
}
