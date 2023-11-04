import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProductsDetailComponent } from '../products-detail/products-detail.component';
import { MatDialog } from '@angular/material';
import { Expression, FilterExpressionUtils, OComboComponent, OGridComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'app-products-home',
  templateUrl: './products-home.component.html',
  styleUrls: ['./products-home.component.css']
})
export class ProductsHomeComponent implements OnInit {
  @ViewChild('grid', { static: true }) grid: OGridComponent;
  @ViewChild('bindingInput', { static: false }) bindingInput: OComboComponent;

  public productTypeArray = [{
    typeText: 'SOUND'
  }, {
    typeText: 'VIDEO'
  }, {
    typeText: 'PHOTO'
  },];

  selected =''
  constructor(protected dialog: MatDialog) { }

  ngOnInit() {
  }




  public openDetail(data: any): void {
    this.dialog.open(ProductsDetailComponent, {
      height: '70%',
      width: '75%',
      data: data,
      panelClass: 'custom-dialog-container'
    });
  }
  // public gridFilter(): void {
  //   const filterExpr = FilterExpressionUtils.buildExpressionLike('product_type', this.selected);
  //   const basicExpr = FilterExpressionUtils.buildBasicExpression(filterExpr);

  //   this.grid.queryData(basicExpr);

  // }
 
	onSelected():void {
		this.selected = this.bindingInput.getValue();
    const filterExpr = FilterExpressionUtils.buildExpressionLike('product_type', this.selected);
    const basicExpr = FilterExpressionUtils.buildBasicExpression(filterExpr);

    this.grid.queryData(basicExpr);
	}


  // createFilter(values: Array<{ attr, value }>): Expression {

  //   let filters = [];
  //   values.forEach(fil => {
  //     if (fil.value) {
  //       filters.push(FilterExpressionUtils.buildExpressionEquals('product_type', 'VIDEO'));
  //     }
  //   });
  //   let ce: Expression;
  //   if (filters.length > 0) {
  //     ce = filters.reduce((exp1, exp2) => FilterExpressionUtils.buildComplexExpression(exp1, exp2, FilterExpressionUtils.OP_AND));
  //   }

  //   return ce;

  // }

}
