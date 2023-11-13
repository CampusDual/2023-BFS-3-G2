import { Component, Injector, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { OBaseTableCellRenderer, OIconPipe } from 'ontimize-web-ngx';

@Component({
  selector: 'app-status-column-renderer',
  templateUrl: './status-column-renderer.component.html',
  styleUrls: ['./status-column-renderer.component.css']
})
export class StatusColumnRendererComponent extends OBaseTableCellRenderer implements OnInit {

  @ViewChild('templateref', { read: TemplateRef, static: false }) public templateref: TemplateRef<any>;

  constructor(protected injector: Injector) {
    super(injector);
  //   this.setComponentPipe();
  // }
  // setComponentPipe() {
  //   this.componentPipe = new OIconPipe(this.injector);
  }
  ngOnInit() {
    // this.pipeArguments = {
    //   currencySimbol: '€',
    //   currencySymbolPosition: 'right',
    //   decimalDigits: 2,
    //   decimalSeparator: ',',
    //   grouping: true,
    //   thousandSeparator: '.'
    // };
  }
  sayHola(){
    console.log()
  }

  // getCellData(value: any) {
  //   let cellValue: string;
  //   if (this.componentPipe && typeof this.pipeArguments !== 'undefined' && value !== undefined) {
  //     cellValue = this.componentPipe.transform(value, this.pipeArguments);
  //   }
  //   return cellValue;
  // }
}
