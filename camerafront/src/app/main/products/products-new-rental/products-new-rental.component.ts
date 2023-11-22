import { Component, Inject, Injector, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatDatepicker } from '@angular/material';
import * as moment from 'moment';
import { FilterExpressionUtils, OFormComponent, OntimizeService } from 'ontimize-web-ngx';

@Component({
  selector: 'app-products-new-rental',
  templateUrl: './products-new-rental.component.html',
  styleUrls: ['./products-new-rental.component.css']
})
export class ProductsNewRentalComponent implements OnInit {
  startDate : Date;
  endDate : Date;
  @ViewChild('form', { static: false }) form: OFormComponent;
  @ViewChild('picker', { static: false }) picker: MatDatepicker<Date>;
  @ViewChild('picker2', { static: false }) picker2: MatDatepicker<Date>;
  protected productRequestService: OntimizeService;
  public noDates: Date[] = [];
  myFilter = (d: Date | null): boolean => {
    let currentDate = d ? new Date(d) : new Date();
    // let currentDateValue = (d || new Date());
    // Prevent Saturday and Sunday from being selected.
    // return day !== 0 && day !== 6;
    let si = !this.noDates.some(fecha => fecha.getTime() === currentDate.getTime())
    console.log(si);
    return !this.noDates.some(fecha => fecha.getTime() === currentDate.getTime());
  };

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
    //let rangeDate = this.form.getFieldValue("date");
    // let startDate = rangeDate.startDate;
    console.log(moment(this.startDate).format('DD-MM-YYYY'));

    // let endDate = rangeDate.endDate;
    const atribMap = {
      "tproducts_id_product": this.data.id_product,
      "state": "pending",
      "request_text": requestText,
      "start_date": moment(this.startDate).format('DD-MM-YYYY'),
      "end_date": moment(this.endDate).format('DD-MM-YYYY'),
      "rprice": this.data.price,
      //"rprofit" : 1
      "rprofit": this.calcProfit(this.startDate, this.endDate)
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
          // for (let element of result.data) {
          //   let startDate = element.start_date;
          //   let endDate = element.end_date;
          //   while (startDate <= endDate) {
          //     this.noDates.push(new Date(startDate));
          //     startDate.setDate(new Date(startDate).getDate() + 1);
          //   }

          //  }
          for (let element of result.data) {
            let startDate = moment(element.start_date);
            let endDate = moment(element.end_date);
            this.noDates.push(startDate.clone().toDate());
            while (startDate.isSameOrBefore(endDate)) {
              this.noDates.push(startDate.clone().toDate()); // Clonamos la fecha para evitar problemas de referencia
              startDate.add(1, 'day');
            }
          }
          // console.log(this.noDates);
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
    const filterExpr = FilterExpressionUtils.buildExpressionMoreEqual("end_date", actualDate.getTime());
    const basicExpr = FilterExpressionUtils.buildBasicExpression(filterExpr);
    basicExpr['tproducts_id_product'] = this.data.id_product;
    basicExpr['state'] = "applied";
    return basicExpr;
  }

}
