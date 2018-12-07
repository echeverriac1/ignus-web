import { Component, OnInit } from '@angular/core';

import {AgencyService} from '../../services/agency.service'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
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
