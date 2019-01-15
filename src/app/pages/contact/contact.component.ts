import { Component, OnInit } from '@angular/core';

import { GlobalService } from '../../providers/global.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  agency: any;
  contact: any;
  constructor(public _globalService: GlobalService) {
    this.agency=[];
    this.contact={}; 
  }


  send(){

    if (this.contact.name !== '' || this.contact.email !== '' || this.contact.type !== '' || this.contact.reason !== ''
        || this.contact.description !== '' ){

      this._globalService.addModel(this.contact,"/api/contact").then(data =>{
        alert('Mensaje enviado');
      })
    }
      const data = JSON.parse(localStorage.getItem("contact"));
      console.log(data);
  }



  ngOnInit() {
    this._globalService.getModel('/api/agency')
     .then((result) => {
      //console.log(result['data']);
       this.agency=result['data'];
     },(err) => {
       console.log(err);
     });

     


  }


}
