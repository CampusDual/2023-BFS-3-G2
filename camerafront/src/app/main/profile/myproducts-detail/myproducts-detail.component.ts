import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { OTranslateService } from 'ontimize-web-ngx';

@Component({
  selector: 'app-myproducts-detail',
  templateUrl: './myproducts-detail.component.html',
  styleUrls: ['./myproducts-detail.component.css']
})
export class MyproductsDetailComponent implements OnInit {
  // tra:OTranslateService ;
  public productTypeArray = [{
    typeText: 'SOUND'
  },{
    typeText: 'VIDEO'
  },{
    typeText: 'PHOTO'
  },];

  constructor() {}
  // public data: any = {};
//@Inject(MAT) public data: any = {statusname:""}
  ngOnInit() {
  }
  public loadData(ev){
    // this.data = ev;
    // tra.get('PHOTO',{});
    
  }
  //public selectedCountryCode = this.data.product_type;

}
