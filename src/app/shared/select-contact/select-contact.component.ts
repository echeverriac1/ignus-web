import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../providers/global.service';

@Component({
  selector: 'app-select-contact',
  templateUrl: './select-contact.component.html',
  styleUrls: ['./select-contact.component.css']
})
export class SelectContactComponent implements OnInit {
  typeContacts:any;

  constructor(public _globalService: GlobalService) { 
    this.typeContacts=[];
  }

  ngOnInit() {
    this._globalService.getModel('/api/typeContact')
     .then((result) => {
      this.typeContacts=result['data'];
     },(err) => {
       console.log(err);
     });

  }

}
