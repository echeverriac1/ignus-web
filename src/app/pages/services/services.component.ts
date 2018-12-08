import { Component, OnInit } from '@angular/core';

import { GlobalService } from '../../providers/global.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})

export class ServicesComponent implements OnInit{
  typeServices: any;

  constructor(public _globalService: GlobalService) {
    this.typeServices=[];
    
  }

  ngOnInit() {
    console.log('PUT SERVICES BRO');
    this._globalService.getModel('/api/typeService')
     .then((result) => {
       console.log(result['data']);
       this.typeServices=result['data'];
     },(err) => {
       console.log(err);
     });

  }

}