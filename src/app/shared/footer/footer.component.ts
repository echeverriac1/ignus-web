import { Component, OnInit } from '@angular/core';

import { GlobalService } from '../../providers/global.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent implements OnInit {
  agency: any;
  logo:any;
  contact:any;
  new:any;

  constructor(public _globalService: GlobalService) {
    this.agency=[];
    this.logo={};
    this.contact = [];
    this.new = [];

    
  }

  ngOnInit() {
    this._globalService.getModel('/api/agency')
     .then((result) => {
      //console.log(result['data']);
       this.agency=result['data'];
       this.logo=this.agency['logo']['url'];
     },(err) => {
       console.log(err);
     });

  }

  saveMessage() {
    this.new = JSON.stringify({
      name: this.contact.name,
      email: this.contact.email,
    });

      console.log(this.new);
       
      this._globalService.addModel(this.new, "/api/contact").then(
        result => {
          console.log(result);
          alert("Usted ha enviado el mensaje exitosamente!");
        },
        err => {
          console.log(err);
        }
      );

  
  }



}
