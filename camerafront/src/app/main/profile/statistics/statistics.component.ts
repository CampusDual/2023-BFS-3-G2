import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { Expression, FilterExpressionUtils, OntimizeService } from 'ontimize-web-ngx';
import { CandlestickChartConfiguration, DataAdapterUtils, OChartComponent, PieChartConfiguration } from 'ontimize-web-ngx-charts';
import { D3LocaleService } from 'src/app/shared/d3-locale/d3-locale.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})

export class StatisticsComponent implements OnInit {
  // productRequestService: OntimizeService
  //   @ViewChild('piechart',{static:true})
  // protected piechart: OChartComponent;
  // public movementTypesChartParams: PieChartConfiguration;

  // data2: any;
  // constructor(protected injector: Injector) {
  //   this.productRequestService = this.injector.get(OntimizeService);
  // }


  //   this.candlestick.setDataArray(DataAdapterUtils.createDataAdapter(this.chartParameters).adaptResult((data)));
  // ngOnInit() {}
  //   this.movementTypesChartParams = new PieChartConfiguration();
  //   this.movementTypesChartParams.margin.top = 0;
  //   this.movementTypesChartParams.margin.right = 0;
  //   this.movementTypesChartParams.margin.bottom = 0;
  //   this.movementTypesChartParams.margin.left = 0;
  //   this.movementTypesChartParams.legendPosition = 'bottom';
  //   this.movementTypesChartParams.legend.vers = 'furious';
  //   this.movementTypesChartParams.labelType = 'value';
    
  //   let resultArr = [];
  //   const filterExpr = FilterExpressionUtils.buildExpressionLike('state', 'applied');
  //   const basicExpr = FilterExpressionUtils.buildBasicExpression(filterExpr);
  //   this.configureService();
  //   let kv = {};
  //   this.productRequestService.query(basicExpr,
  //     ['product_name', 'state', 'start_date', 'end_date', 'price', 'p_user'],
  //     'myProductRequestEntry').subscribe(data => {
  //       for (let element of data.data) {
  //         element['profit'] = this.calcProfit(element);
  //         resultArr.push(element);
  //       }
  //       // console.log(data)
  //       // console.log(resultArr)
  //       this.data2 = [
  //         {"product_name": 123, "price": 130},
  //         {"product_name": 321, "price": 530},
  //         {"product_name": 567, "price": 260}
  //       ]
  //     }
  //   )
  //   console.log(this.data2)
  //   this.piechart.setDataArray(DataAdapterUtils.createDataAdapter(this.movementTypesChartParams).adaptResult(this.data2))
  // }
  // private _configurePieChart(): void {
  //   this.movementTypesChartParams = new PieChartConfiguration();
  //   this.movementTypesChartParams.margin.top = 0;
  //   this.movementTypesChartParams.margin.right = 0;
  //   this.movementTypesChartParams.margin.bottom = 0;
  //   this.movementTypesChartParams.margin.left = 0;
  //   this.movementTypesChartParams.legendPosition = 'bottom';
  //   this.movementTypesChartParams.legend.vers = 'furious';
  //   this.movementTypesChartParams.labelType = 'value';
    // this.movementTypesChartParams.valueType = locale.numberFormat('$,.2f');
  // }


  // private configureFilter() {
  //   let filters: Array<Expression> = [];
  //   filters.push(FilterExpressionUtils.buildExpressionLessEqual("start_date", this.data.end_date));
  //   filters.push(FilterExpressionUtils.buildExpressionMoreEqual("end_date", this.data.start_date));
  //   let kv = { '@basic_expression': filters.reduce((exp1, exp2) => FilterExpressionUtils.buildComplexExpression(exp1, exp2, FilterExpressionUtils.OP_AND)) };
  //   kv['tproducts_id_product'] = this.data.tproducts_id_product;
  //   kv['state'] = "pending";
  //   return kv;
  // }
  // calcProfit(element) {
  //   const diferenciaEnMilisegundos = element["end_date"] - element["start_date"];
  //   const diferenciaEnDias = diferenciaEnMilisegundos / (1000 * 60 * 60 * 24);
  //   return diferenciaEnDias * element["price"]
  // }
  // protected configureService() {
  //   const conf = this.productRequestService.getDefaultServiceConfiguration('productsRequest');
  //   this.productRequestService.configureService(conf);
  // }

  // queryRequests() {

  //   const filter = {
  //   };
  //   this.productRequestService.query(filter, ['product_name', 'start_date', 'end_date',
  //     'tproducts_id_product', 'state', 'price', 'r_user', 'p_user'], "myProductRequestEntry").subscribe(
  //       response => {
  //         if (response) {
  //           console.log(response);
  //         } else {
  //           console.error("Invalid data format in API response.");
  //         }
  //       }
  //     );
  // }

  /////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////Ejemplo que funciona abaixo
  /////////////////////////////////////////////////////////////////////////////
  @ViewChild('candlestick',{static:true})
  protected candlestick: OChartComponent;

  chartParameters: CandlestickChartConfiguration;

  constructor() { }


  ngOnInit() { this.chartParameters = new CandlestickChartConfiguration();
    this.chartParameters.xColumn = 'date';
    this.chartParameters.openAxis = 'open';
    this.chartParameters.highAxis = 'high';
    this.chartParameters.lowAxis = 'low';
    this.chartParameters.closeAxis = 'close';

    let data = [
      { "date": 1511111115707, "open": 145.11, "high": 146.15, "low": 144.73, "close": 146.06, },
      { "date": 1511111115708, "open": 145.99, "high": 146.37, "low": 145.34, "close": 145.73 },
      { "date": 1511111115709, "open": 145.97, "high": 146.61, "low": 145.67, "close": 146.37 },
      { "date": 1511111115712, "open": 145.85, "high": 146.11, "low": 145.43, "close": 145.97 },
      { "date": 1511111115713, "open": 145.71, "high": 145.91, "low": 144.98, "close": 145.55 },
      { "date": 1511111115714, "open": 145.87, "high": 146.32, "low": 145.64, "close": 145.92 },
      { "date": 1511111115715, "open": 146.73, "high": 147.09, "low": 145.97, "close": 147.08 },
      { "date": 1511111115716, "open": 147.04, "high": 147.15, "low": 146.61, "close": 147.07 },
      { "date": 1511111115719, "open": 146.89, "high": 147.07, "low": 146.43, "close": 146.97 },
      { "date": 1511111115720, "open": 146.29, "high": 147.21, "low": 146.2, "close": 147.07 },
      { "date": 1511111115721, "open": 146.77, "high": 147.28, "low": 146.61, "close": 147.05 },
      { "date": 1511111115722, "open": 147.7, "high": 148.42, "low": 147.15, "close": 148 },
      { "date": 1511111115723, "open": 147.97, "high": 148.49, "low": 147.43, "close": 148.33 },
      { "date": 1511111115727, "open": 148.33, "high": 149.13, "low": 147.98, "close": 149.1 },
      { "date": 1511111115728, "open": 149.13, "high": 149.5, "low": 148.86, "close": 149.37 },
      { "date": 1511111115729, "open": 149.15, "high": 150.14, "low": 149.01, "close": 149.41 }

    ];




    this.candlestick.setDataArray(DataAdapterUtils.createDataAdapter(this.chartParameters).adaptResult((data)));
  }

}
