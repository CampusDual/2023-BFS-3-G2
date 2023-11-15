import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { ProductsDetailComponent } from '../products-detail/products-detail.component';
import { MatDialog } from '@angular/material';
import { FilterExpressionUtils, OComboComponent, OGridComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'app-products-home',
  templateUrl: './products-home.component.html',
  styleUrls: ['./products-home.component.css']
})
export class ProductsHomeComponent implements OnInit {
  @ViewChild('grid', { static: true }) grid: OGridComponent;
  @ViewChild('bindingInput', { static: true }) bindingInput: OComboComponent;

  public productTypeArray = [
    {
      typeText: 'ALL'
    }, {
      typeText: 'SOUND'
    }, {
      typeText: 'VIDEO'
    }, {
      typeText: 'PHOTO'
    },
  ];

  searchTerm: string = '';

  constructor(protected dialog: MatDialog) {}

  ngOnInit() {}

  public openDetail(data: any): void {
    this.dialog.open(ProductsDetailComponent, {
      height: '70%',
      width: '75%',
      data: data,
      panelClass: 'custom-dialog-container'
    });
  }

  onSelected(): void {
    let selected = this.bindingInput.getValue();
    if (selected !== 'ALL') {
      const filterExpr = FilterExpressionUtils.buildExpressionLike('product_type', selected);
      const basicExpr = FilterExpressionUtils.buildBasicExpression(filterExpr);
      this.grid.queryData(basicExpr);
    } else {
      this.grid.reloadData();
    }
  }

  performSearch(): void {
    const filterExpr = FilterExpressionUtils.buildExpressionLike('product_name', this.searchTerm);
    const basicExpr = FilterExpressionUtils.buildBasicExpression(filterExpr);
    this.grid.queryData(basicExpr);
  }
}
