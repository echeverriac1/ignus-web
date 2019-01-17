import { Component, OnInit } from '@angular/core';

import { GlobalService } from '../../providers/global.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})

export class ServicesComponent implements OnInit{
  typeServices: any;
  show: boolean;

  constructor(public _globalService: GlobalService) {
    this.typeServices=[];
    
  }
  
  sliderShow(){
    console.log(this.typeServices.length)
    this.show = false;
    if(this.typeServices.lenght<=4){
      return this.show=false;
    }else{
      return this.show=true;
    }
  }

  ngOnInit() {
    this.sliderShow();
    
    this._globalService.getModel('/api/typeService')
     .then((result) => {
      //  console.log(result['data']);
       this.typeServices=result['data'];
       this.typeServices.length;
     },(err) => {
       console.log(err);
     });

  }

  
}