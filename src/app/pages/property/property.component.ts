import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from '../../providers/global.service';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {
  property:any;
  array:any

  constructor(private route: ActivatedRoute, private _globalService: GlobalService, private location: Location) { 
    this.property=[];
    this.array=[];
  }


  getProperty(){
    const id = this.route.snapshot.paramMap.get('id');

    this._globalService.getModel(`/api/property/${id}`)
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
