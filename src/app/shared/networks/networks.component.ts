import { Component, OnInit } from '@angular/core';

import { GlobalService } from '../../providers/global.service';

@Component({
  selector: 'app-networks',
  templateUrl: './networks.component.html',
  styleUrls: ['./networks.component.css']
})
export class NetworksComponent implements OnInit {
  agency: any;

  constructor(public _globalService: GlobalService) {
    this.agency=[];
    
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
