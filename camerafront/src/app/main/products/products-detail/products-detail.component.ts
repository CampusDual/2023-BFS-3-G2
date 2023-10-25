import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.css']
})
export class ProductsDetailComponent implements OnInit {

  constructor() { }
  public data: any = {statusname:""};

  ngOnInit() {
  }
  public loadData(ev){
    this.data = ev;
  }

}
