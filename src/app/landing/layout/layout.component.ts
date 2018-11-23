import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

import { AgencyService } from '../../services/agency.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit{
  agency: any;

  constructor(public agencyService: AgencyService) {
    this.agency=[];
   } 

  ngOnInit() {
    console.log("init");
    this.agencyService.getAgency();

  }

}
