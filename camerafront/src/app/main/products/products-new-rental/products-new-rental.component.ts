import { Component, Inject, Injector, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import { OFormComponent, OntimizeService } from 'ontimize-web-ngx';

@Component({
  selector: 'app-products-new-rental',
  templateUrl: './products-new-rental.component.html',
  styleUrls: ['./products-new-rental.component.css']
})
export class ProductsNewRentalComponent implements OnInit {
  @ViewChild('form', { static: false }) form: OFormComponent;
  protected productRequestService: OntimizeService;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any = { statusname: "" }, protected injector: Injector,
    public dialogRef: MatDialogRef<ProductsNewRentalComponent>,
    ) { 
    this.productRequestService = this.injector.get(OntimizeService);
  }

  ngOnInit() {
    this.configureService();
  }
  public loadData(ev) {
    this.data = ev;
  }
  public validateReservation(ev) {

  }
  closeDialog() {
    this.dialogRef.close();
  }
  public update() {
    let requestText = this.form.getFieldValue("request_text");
    let rangeDate = this.form.getFieldValue("date");
    let startDate = rangeDate.startDate.format('YYYY-MM-DD');
    let endDate = rangeDate.endDate.format('YYYY-MM-DD');
    const atribMap = {
      "tproducts_id_product": this.data.id_product,
      "state": "pending",
      "request_text": requestText,
      "start_date": startDate,
      "end_date": endDate
    };
    // this.productRequestService.query()
    this.productRequestService.insert(atribMap, "productRequest").subscribe(
      response => {
        if (response) {
          console.log("zi funciona" + response);
          // console.log(atribMap);
        } else {
          console.error("Invalid data format in API response.");
        }
      });
      this.dialogRef.close();
  }

  protected configureService() {

    const conf = this.productRequestService.getDefaultServiceConfiguration('productsRequest');
    this.productRequestService.configureService(conf);
  }
}
