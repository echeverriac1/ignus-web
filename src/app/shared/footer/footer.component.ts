import { Component, OnInit } from '@angular/core';

import { GlobalService } from '../../providers/global.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent implements OnInit {
  agency: any;
  typeContacts:any;
  logo:any;

  contact:any;
  new:any;

  constructor(public _globalService: GlobalService) {
    this.agency=[];
    this.typeContacts=[];
    this.logo={};
    
    this.contact={};
    this.new = {};

    
  }

  ngOnInit() {
    this.getAgency();
    this.getTypeContactForSelect();
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

  getTypeContactForSelect(){
    this._globalService.getModel('/api/typeContact')
     .then((result) => {
      this.typeContacts=result['data'];
     },(err) => {
       console.log(err);
     });
  }



  
  saveContact() {
    this.new = JSON.stringify({
      name: this.contact.name,
      email: this.contact.email,
      description: this.contact.description,
      TypeContactId: this.contact.TypeContactId,
      SubjectId: this.contact.SubjectId
    });

    
    alert(this.new);
    console.log(this.new);
       
      // this._globalService.addModel(this.new, "/api/contact").then(
      //   result => {
      //     console.log(result);
      //     alert("Usted ha enviado el mensaje exitosamente!");
      //   },
      //   err => {
      //     console.log(err);
      //   }
      // );

  
  }
}
