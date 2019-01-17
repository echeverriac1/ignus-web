import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../providers/global.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {
  property: any;

  constructor(public _globalService: GlobalService) { 
    this.property=[];

  }

  getProperty(){
    this._globalService.getModel('/api/property')
     .then((result) => {
       console.log(result['data']);
       this.property=result['data'];
     },(err) => {
       console.log(err);
     });
  }

  ngOnInit() {
    this.getProperty();
  }

}
