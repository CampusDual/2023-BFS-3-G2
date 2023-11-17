import { Component, OnInit, ViewChild } from '@angular/core';
import { Expression, FilterExpressionUtils, OFormComponent, OTableComponent } from 'ontimize-web-ngx';
import { OChartComponent, } from 'ontimize-web-ngx-charts';
import { } from 'src/app/shared/d3-locale/d3-locale.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})

export class StatisticsComponent {
  public selected: {};
  @ViewChild('pie', { static: true }) pie: OChartComponent;
  @ViewChild('formFilter', { static: false }) private formFilter: OFormComponent;
  title: string;
  profits: any;
  constructor() {
  }


  ngAfterViewInit() {
    this.filterBuilder()
  }

  filterBuilder() {
    let dates = this.formFilter.getFieldValue("date")
    if (dates) {
      const startDate = dates.startDate.format('YYYY-MM-DD')
      const endDate = dates.endDate.format('YYYY-MM-DD')
      this.title = "PERIODO " + startDate + " - " + endDate;
      // console.log(startDate)
      // const filterExpr = FilterExpressionUtils.buildExpressionLess("start_date", fecha);
      // const basicExpr = FilterExpressionUtils.buildBasicExpression(filterExpr);
      let filters: Array<Expression> = [];
      filters.push(FilterExpressionUtils.buildExpressionLessEqual("start_date", endDate));
      filters.push(FilterExpressionUtils.buildExpressionMoreEqual("start_date", startDate));
      let kv = {
        '@basic_expression': filters.reduce((exp1, exp2) =>
          FilterExpressionUtils.buildComplexExpression(exp1, exp2, FilterExpressionUtils.OP_AND))
      }
      kv["state"] = "applied"
      this.pie.queryData(kv, { sqltypes: { start_date: 91 } });
    }
    else {
      this.title = "ALL TIME"
      const filterExpr = FilterExpressionUtils.buildExpressionLike("state", "applied");
      const basicExpr = FilterExpressionUtils.buildBasicExpression(filterExpr);
      this.pie.queryData(basicExpr);


    }
    
  }
  loadData(){
    let dataProfits = this.pie.getDataArray()
    console.log(dataProfits)
  }
}
