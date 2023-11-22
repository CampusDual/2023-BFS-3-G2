import { Component, Inject, Injector, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import { FilterExpressionUtils, OFormComponent, OntimizeService } from 'ontimize-web-ngx';

@Component({
  selector: 'app-products-new-rental',
  templateUrl: './products-new-rental.component.html',
  styleUrls: ['./products-new-rental.component.css']
})
export class ProductsNewRentalComponent implements OnInit {
  @ViewChild('form', { static: false }) form: OFormComponent;
  protected productRequestService: OntimizeService;
  public noDates: Date[] = [];
  myFilter = (d: Date | null): boolean => {
    let currentDate = (d || new Date());
    // Prevent Saturday and Sunday from being selected.
    // return day !== 0 && day !== 6;
  console.log(!this.noDates.some(fecha => fecha.getTime() === currentDate.getTime()))
    return !this.noDates.some(fecha => fecha.getTime() === currentDate.getTime());
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any = { statusname: "" }, protected injector: Injector,
    public dialogRef: MatDialogRef<ProductsNewRentalComponent>,
    ) { 
    this.productRequestService = this.injector.get(OntimizeService);
  }

  ngOnInit() {
    this.configureService();
    this.queryDates();
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
    let startDate = rangeDate.startDate;
    let endDate = rangeDate.endDate;
    const atribMap = {
      "tproducts_id_product": this.data.id_product,
      "state": "pending",
      "request_text": requestText,
      "start_date": startDate.format('YYYY-MM-DD'),
      "end_date": endDate.format('YYYY-MM-DD'),
      "rprice": this.data.price,
      //"rprofit" : 1
      "rprofit" : this.calcProfit(startDate, endDate)
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
  calcProfit(startDate, endDate) {
    // const diferenciaEnMilisegundos = endDate.toDate().getTime() - startDate.toDate().getTime();
    let diferenciaEnDias = endDate.diff(startDate, 'days') + 1;
    //const diferenciaEnDias = (diferenciaEnMilisegundos  / (1000 * 60 * 60 * 24)) + 1;
    return diferenciaEnDias * this.data.price
  }

  protected configureService() {

    const conf = this.productRequestService.getDefaultServiceConfiguration('productsRequest');
    this.productRequestService.configureService(conf);
  }
  queryDates() {
    this.configureServiceRequests();
    let kv = this.configureFilter();
    this.productRequestService.query(kv, ['id_prequest', 'start_date', 'end_date', 'tproducts_id_product', 'state'], 'productRequest', { start_date: 91, end_date: 91 }).subscribe(
      result => {
        if (result.data && result.data.length) {
          for (let element of result.data) {
            let startDate = new Date(element.start_date);
            let endDate = new Date(element.end_date);
            while (startDate <= endDate) {
              this.noDates.push(new Date(startDate));
              startDate.setDate(startDate.getDate() + 1);
            }

          }
          console.log(this.noDates);
        }
      }
    );
  }
  protected configureServiceRequests() {

    const conf = this.productRequestService.getDefaultServiceConfiguration('productsRequest');
    this.productRequestService.configureService(conf);
  }
  private configureFilter() {

    let actualDate: Date = new Date();
    const filterExpr = FilterExpressionUtils.buildExpressionMoreEqual("end_date", actualDate);
    const basicExpr = FilterExpressionUtils.buildBasicExpression(filterExpr);
    basicExpr['tproducts_id_product'] = this.data.id_product;
    basicExpr['state'] = "applied";
    return basicExpr;
  }

}
