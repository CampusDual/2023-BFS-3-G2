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
 
  ngOnInit() { 
  }

}
