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

  constructor(public _globalService: GlobalService) {
    this.agency=[];
    this.logo={}
    
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



}
