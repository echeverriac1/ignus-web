import { Component, OnInit } from '@angular/core';

import { AgencyService } from '../../services/agency.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent implements OnInit {
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
