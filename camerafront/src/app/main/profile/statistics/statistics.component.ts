import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import * as moment from 'moment';
import { Expression, FilterExpressionUtils, OFormComponent, OntimizeService } from 'ontimize-web-ngx';
import { CandlestickChartConfiguration, DataAdapterUtils, OChartComponent, PieChartConfiguration } from 'ontimize-web-ngx-charts';
import { D3LocaleService } from 'src/app/shared/d3-locale/d3-locale.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})

export class StatisticsComponent implements OnInit {
  public selected: {};
  @ViewChild('pie', { static: true }) pie: OChartComponent;
  @ViewChild('formFilter', { static: false }) private formFilter: OFormComponent;

  constructor() {
   
   }


  ngOnInit() { }

  filterBuilder(){
    let dates = this.formFilter.getFieldValue("date")
    const fecha : Date = new Date('2023-11-10')
    // const fechaFormateada: string = fecha.toISOString().split('T')[0];
    // const formattedDateString = dates.startDate.format('YYYY-MM-DD');
    // const startDate = moment(formattedDateString).toDate();
    // const endDate = dates.endDate.toDate
    // console.log(startDate)
    const filterExpr = FilterExpressionUtils.buildExpressionLess("rprofit", 700);
    const basicExpr = FilterExpressionUtils.buildBasicExpression(filterExpr);
    // let filters: Array<Expression> = [];
    // filters.push(FilterExpressionUtils.buildExpressionLessEqual("start_date", endDate));
    // filters.push(FilterExpressionUtils.buildExpressionMoreEqual("start_date", startDate));
    // let kv = { '@basic_expression': filters.reduce((exp1, exp2) => 
    // FilterExpressionUtils.buildComplexExpression(exp1, exp2, FilterExpressionUtils.OP_AND)) };
    this.pie.queryData(basicExpr);
    
  }

}
