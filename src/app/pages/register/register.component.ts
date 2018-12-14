import { Component, OnInit } from '@angular/core';

import { GlobalService } from '../../providers/global.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  // agency: any;
  cliente: any;

  constructor( public _globalService: GlobalService ) {  
    // this.agency=[];
    this.cliente = [];
  }

  ngOnInit() {
    // this._globalService.getModel('/api/agency')
    //  .then((result) => {
    //   //console.log(result['data']);
    //    this.agency=result['data'];
    //  },(err) => {
    //    console.log(err);
    //  });

  }

  showAlert(){
    alert("Su registro ha sido exitoso");
  }

  Registrar(){
    console.log('trying');

    this._globalService.addModel(this._globalService,"user/client").then(data =>{
      this.showAlert();
    })
  
    //const data = JSON.parse(localStorage.getItem("client"));
    //console.log(data);

  }


}
