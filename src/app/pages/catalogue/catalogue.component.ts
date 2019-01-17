import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../providers/global.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {
  properties: any;

  constructor(public _globalService: GlobalService) { 
    this.properties=[];

  }

  getProperty(){
    this._globalService.getModel('/api/property/catalogue')
     .then((result) => {
      console.log('FUCK YEAH!')
      console.log(result['data']);
       this.properties=result['data'];
     },(err) => {
       console.log(err);
     });
  }

  ngOnInit() {
    this.getProperty();
  }

}
