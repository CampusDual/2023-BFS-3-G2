import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { OFormComponent, OGridComponent, OntimizeService } from 'ontimize-web-ngx';
import { MyproductsDetailsImageComponent } from '../myproducts-details-image/myproducts-details-image.component';

@Component({
  selector: 'app-myproducts-detail',
  templateUrl: './myproducts-detail.component.html',
  styleUrls: ['./myproducts-detail.component.css']
})
export class MyproductsDetailComponent implements OnInit {

  @ViewChild('grid', { static: true }) grid: OGridComponent;
  //@ViewChild('form', { static: true }) form: OFormComponent;
  public productTypeArray = [{
    typeText: 'SOUND'
  },{
    typeText: 'VIDEO'
  },{
    typeText: 'PHOTO'
  },];

  constructor(
    protected dialog: MatDialog,
    protected productRequestService: OntimizeService,
    // @Inject(MAT_DIALOG_DATA) public data: any = { statusname: "" }
  ) {}
  // public data: any = {};
  
  ngOnInit() {
    this.configureService();


  }
  sayHola(){
    console.log("hola")
  }
  queryImages(data){
    let idProduct = data.id_product;
    this.productRequestService.query({tproducts_id_product: idProduct}, ['id_image,tproducts_id_product,pimage'], 'productImage').subscribe(
      result => {
        if (result.data && result.data.length) {
          this.grid.setDataArray(result.data);
        }
      }
    );
  }

  public loadData(ev){
    //this.queryImages(ev);
  }
  protected configureService() {
    const conf = this.productRequestService.getDefaultServiceConfiguration('products');
    this.productRequestService.configureService(conf);
  }
  public openZoomDialog(data: any): void {
    this.dialog.open(MyproductsDetailsImageComponent, {
      height: '70%',
      width: '75%',
      data: data,
      panelClass: 'custom-dialog-container'
    });
  }
  public openNewDialog(data: any): void {
    this.dialog.open(MyproductsDetailsImageComponent, {
      height: '70%',
      width: '75%',
      data: data,
      panelClass: 'custom-dialog-container'
    });
  }


}
