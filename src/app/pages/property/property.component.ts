import { Component, OnInit, Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from '../../providers/global.service';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})

@Injectable()
export class PropertyComponent implements OnInit {
  catalogue:any;
  property:any;
  publication:any;
  typeService:any;
  aux:any;

  constructor(private route: ActivatedRoute, private _globalService: GlobalService, private location: Location) { 
    this.catalogue=[];
    this.property=[];
    this.publication=[];
    this.typeService=[];
    this.aux={}
  }


  getProperty(){
    const id = this.route.snapshot.paramMap.get('id');

    this._globalService.getModel(`/api/property/catalogue`)
     .then((result) => {

       this.catalogue=result['data'];
       this.property = this.catalogue.filter( property => property.id == id)
       this.aux = this.property[0];
       this.publication =this.aux.Publication;
       this.typeService =this.aux.TypeService;
     },(err) => {
       console.log(err);
     });
  }

  ngOnInit() {
    this.getProperty();
    
  }

}
