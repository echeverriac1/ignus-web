import { Component, OnInit } from '@angular/core';
import {GlobalService} from 'src/app/providers/global.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  typeServices: any;
  typeProperties: any;

  constructor(public _globalService:GlobalService) { 
    this.typeServices=[];
    this.typeProperties=[];
  }

  getTypeServices(){
    this._globalService.getModel('/api/typeService')
     .then((result) => {
       this.typeServices=result['data'];
     },(err) => {
       console.log(err);
     });
  }

  getTypeOfProperty(){
    this._globalService.getModel('/api/typeProperty')
     .then((result) => {
       this.typeProperties=result['data'];
     },(err) => {
       console.log(err);
     });
  }


  ngOnInit() {
    this.getTypeServices();
    this.getTypeOfProperty();
  }

}
