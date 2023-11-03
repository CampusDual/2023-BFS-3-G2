import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { AuthService, OFormComponent, OTableColumnComponent, OTableComponent, OTextInputComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'app-my-rentals-home',
  templateUrl: './my-rentals-home.component.html',
  styleUrls: ['./my-rentals-home.component.css']
})
export class MyRentalsHomeComponent implements OnInit {
  //@ViewChild('tablein', { static: true }) tableIn: OTableComponent;
  @ViewChild('tableout', { static: true }) tableOut: OTableComponent;
  //@ViewChild('tproducts_id_product', { static: true }) idInput: OTableColumnComponent;
  @ViewChild('branchEmployeesTable', { static: true }) detailForm: OFormComponent;
  

  constructor(private auth: AuthService
    // @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {

  }
  ngAfterViewInit(){
    //this.tableIn.queryData({r_user: this.auth.getSessionInfo().user });
    
    this.tableOut.queryData({p_user: this.auth.getSessionInfo().user});
    let resultado2 = this.tableOut.dataArray;
    //this.tableOut.getValue("tproducts_id_product");
    this.detailForm.queryData({ id_product: "3" });

  }

  // public loadData(ev) {
  //   this.data = ev;
  // }

}
