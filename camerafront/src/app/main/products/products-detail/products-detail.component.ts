import { Component, Inject, Injector, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { OFormComponent, OntimizeService } from 'ontimize-web-ngx';
import { ProductsNewRentalComponent } from '../products-new-rental/products-new-rental.component';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.css']
})

export class ProductsDetailComponent implements OnInit {
  @ViewChild('form', { static: false }) form: OFormComponent;
  // public resultado2;
  // protected productRequestService: OntimizeService;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any = { statusname: "" },
    protected injector: Injector,
    protected dialog: MatDialog
  ) {
    // this.productRequestService = this.injector.get(OntimizeService);
  }
  // public data: any ;
  // myFilter = (d: Date | null): boolean => {
  //   const day = (d || new Date()).getDay();
  //   // Prevent Saturday and Sunday from being selected.
  //   return day !== 0 && day !== 6;
  // }


  ngOnInit() {
    // this.configureService();
  }
  public loadData(ev) {
    this.data = ev;
  }
  public openRentDialog(): void {
    this.dialog.open(ProductsNewRentalComponent, {
      height: '40%',
      width: '50%',
      data: this.data,
      panelClass: 'custom-dialog-container'
    });
  }
  // public validateReservation(ev) {
  //   // const columns = ["rent_id", "car_id", "brand", "model", "car_photo", "user_rent", "rental_start_date", "rental_end_date", "total_price", "observations"];
  //   // const entity = "productRequest";
  //   // this.productRequestService.insert(null,entity).subscribe(
  //   //   response => {
  //   //     if (response ) {
  //   //     } else {
  //   //       console.error("Invalid data format in API response.");
  //   //     }
  //   //   });
  //   //   },
  //   //   error => {
  //   //     console.error(error);
  //   //   }
  //   // );

  //   // const resultado = ev.date;
  //   // let atrib: string[];
  //   // atrib = ["date"];
  //   // this.resultado2 = this.form.getFieldValue("date");
  //   //  let startDate = this.form.getFieldValue("start_date_available");
  //   //  let rangeDate = this.form.getFieldValue("date");
  //   //let startDate2 = this.form.getAttributesToQuery();
  //   //  const fecha = new Date(startDate);
  //   //  console.log(fecha);
  //   //  let startDate = rangeDate.startDate;
  //   //  let endDate = rangeDate.endDate._d;
  //   // let cosa = this.resultado2.endDate._d;
  // }
  // public update() {
  //   let rangeDate = this.form.getFieldValue("date");
  //   // let rawStartDate = rangeDate.startDate._d.toISOString();
  //   let startDate = rangeDate.startDate.format('YYYY-MM-DD');
  //   let endDate = rangeDate.endDate.format('YYYY-MM-DD');
  //   // let startIndex = rawStartDate.indexOf("T");
  //   // let startDate = rawStartDate.slice(0, startIndex);
  //   // let rawEndDate = rangeDate.endDate._d.toISOString();
  //   // let endIndex = rawEndDate.indexOf("T");
  //   // let endDate = rawEndDate.slice(0, endIndex);
  //   const atribMap = {
  //     "tuser_user_": this.data.tuser_user_,
  //     "tproducts_id_product": this.data.id_product,
  //     "state": "pending",
  //     "request_text": "Hola buenos dias",
  //     "start_date": startDate,
  //     "end_date": endDate
  //   };
  //   // this.productRequestService.query()
  //   this.productRequestService.insert(atribMap, "productRequest").subscribe(
  //     response => {
  //       if (response) {
  //         console.log("zi funciona" + response);
  //         // console.log(atribMap);
  //       } else {
  //         console.error("Invalid data format in API response.");
  //       }
  //     });
  // }

  // protected configureService() {

  //   const conf = this.productRequestService.getDefaultServiceConfiguration('productsRequest');
  //   this.productRequestService.configureService(conf);
  // }

}
