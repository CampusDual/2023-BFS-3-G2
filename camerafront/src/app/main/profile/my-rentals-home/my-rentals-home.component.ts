import { ChangeDetectorRef, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { AuthService, OTableComponent, OntimizeService } from 'ontimize-web-ngx';

@Component({
  selector: 'app-my-rentals-home',
  templateUrl: './my-rentals-home.component.html',
  styleUrls: ['./my-rentals-home.component.css']
})

export class MyRentalsHomeComponent implements OnInit {
  @ViewChild('tablein', { static: true }) tableIn: OTableComponent;
  @ViewChild('tableout', { static: true }) tableOut: OTableComponent;
  constructor(
    private auth: AuthService,
    private ontimizeService: OntimizeService,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.ontimizeService.configureService(this.ontimizeService.getDefaultServiceConfiguration('productsRequest'));
  }
  ngAfterViewInit() {
    // this.tableIn.queryData({r_user: this.auth.getSessionInfo().user});

    //  this.tableOut.queryData({p_user: this.auth.getSessionInfo().user});

  }
  stateUpdate(choose: boolean, rowData: any) {

    let stateString;
    if (choose) {
      stateString = "applied";
      this.destroyConflictedRents(rowData);
    } else {
      stateString = "denied"
    }
    let atribMap = {
      "state": stateString
    }
    let keyMap = {
      "id_prequest": rowData.id_prequest
    }
    this.updateRequests(keyMap, atribMap);
    // this.ontimizeService.update(keyMap, atribMap, "productRequest").subscribe(
    //   response => {
    //     if (response) {
    //       console.log("zi funciona" + response);
    //     } else {
    //       console.error("Invalid data format in API response.");
    //     }
    //   });

  }
  destroyConflictedRents(rowData: any) {

    let atribMap = [
      'start_date', 'end_date', 'id_prequest'
    ];
    let deniedAtribMap = {
      "state": "denied"
    };
    let keyMap = {
      "tproducts_id_product": rowData.tproducts_id_product,
      "state": "pending"
    };
    this.ontimizeService.query(keyMap, atribMap, "myProductRequestEntry").subscribe(
      res => {
        if (res.data && res.data.length) {
          for (let element of res.data) {
            if (element.id_prequest != rowData.id_prequest) {
              if (element.start_date > rowData.start_date && element.start_date < rowData.end_date) {
                let updateKeyMap = {
                  "id_prequest": element.id_prequest
                }
                this.updateRequests(updateKeyMap, deniedAtribMap);

              } else if (element.end_date >= rowData.start_date && element.end_date <= rowData.end_date) {
                let updateKeyMap = {
                  "id_prequest": element.id_prequest
                }
                this.updateRequests(updateKeyMap, deniedAtribMap);
              }
            }
          }
        }
      });
  }
  updateRequests(keyMap: any, atribMap: any) {
    this.ontimizeService.update(keyMap, atribMap, "productRequest").subscribe(
      response => {
        if (response) {
          console.log("zi funciona" + response);
        } else {
          console.error("Invalid data format in API response.");
        }
      });
  }
}
