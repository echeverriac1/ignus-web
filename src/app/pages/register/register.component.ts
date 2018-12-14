import { Component, OnInit } from '@angular/core';

import { GlobalService } from '../../providers/global.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor( public _globalService: GlobalService ) { }

  ngOnInit() {
  }

  showAlert(){
    alert("Su registro ha sido exitoso");
  }

  Registrar(){

    this._globalService.addModel(this._globalService,"user/client").then(data =>{
      this.showAlert();
    })
  
    const data = JSON.parse(localStorage.getItem("client"));
    console.log(data);

  }


}
