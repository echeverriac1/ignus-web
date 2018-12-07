import { Component, OnInit } from '@angular/core';

import { AgencyService } from '../../services/agency.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})

export class LayoutComponent implements OnInit{
  agency: any;

  constructor(public _agencyService: AgencyService) {
    this.agency=[];


  } 
  
  ngOnInit() {
    this._agencyService.getAgency()
    .then((result) => {
      this.agency=result['data'];
    }, (err) => {
      console.log(err);
      //this.loader.dismiss();
    });
    console.log('police two');
 
  }



}