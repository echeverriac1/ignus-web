import { Component, OnInit } from '@angular/core';

import { GlobalService } from '../../providers/global.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  agency: any;
  logo: any;

  client:any;
  new:any;

  constructor(public _globalService: GlobalService) {
    this.agency=[];
    this.logo=[];

    this.client={};
    this.new={};
    
  }

  getAgency(){
    this._globalService.getModel('/api/agency')
    .then((result) => {
      this.agency=result['data'];
      this.logo=this.agency['logo']['url'];
    },(err) => {
      console.log(err);
    });
  }

  

  // subscribe(){

  //   this.new = JSON.stringify({
  //     username: this.client.username,
  //     firstName: this.client.firstName,
  //     lastName: this.client.lastName,
  //     gender: this.client.gender,
  //     birthDate: this.client.birthDate,
  //   });
    
  //   this._globalService.addModel(this.new, "/api/user/client")
  //   .then(result => {
  //       console.log("EPA ESTAS POR AQUI");
  //       console.log(result);
  //       alert("Usted ha enviado el mensaje exitosamente!");
  //     },
  //     err => {
  //       console.log("ESTA ENTRANDO EN EL ERROR");
  //       console.log(err);
  //     }
  //   );
  // }


  subscribe(){

    if (this.client.username !== '' || this.client.firstName !== '' || this.client.lastName !== ''
        || this.client.gender !== '' || this.client.birthDate !== '' ){

      this._globalService.addModel(this.client,"/api/user/client").then(data =>{
        alert('CLIENTE SUSCRITO');
      })
    }
      const data = JSON.parse(localStorage.getItem("client"));
      console.log(data);
  }




  ngOnInit() {
    this.getAgency()
  }

}
