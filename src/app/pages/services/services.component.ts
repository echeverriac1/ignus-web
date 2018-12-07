import { Component, OnInit } from '@angular/core';

import { AgencyService } from '../../services/agency.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})

export class ServicesComponent implements OnInit{
  typeService: any;

  constructor(public _typeServiceService: AgencyService) {
    this.typeService=[];


  } 
  
  ngOnInit() {
    console.log('showing type of services')
    this._typeServiceService.getServices()
    .then((result) => {
      this.typeService=result['data'];
      console.log(this.typeService);
    }, (err) => {
      console.log(err);
      //this.loader.dismiss();
    });
    console.log('police two');
 
  }



}