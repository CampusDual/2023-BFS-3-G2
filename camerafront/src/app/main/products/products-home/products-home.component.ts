import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductsDetailComponent } from '../products-detail/products-detail.component';
import { MatDialog } from '@angular/material';
import { OComboComponent, OGridComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'app-products-home',
  templateUrl: './products-home.component.html',
  styleUrls: ['./products-home.component.css']
})
export class ProductsHomeComponent implements OnInit {
  @ViewChild('grid', { static: true }) grid: OGridComponent;
  @ViewChild('bindingInput', { static: true }) bindingInput: OComboComponent;

  public productTypeArray = [
    { typeText: 'ALL' },
    { typeText: 'SOUND' },
    { typeText: 'VIDEO' },
    { typeText: 'PHOTO' },
  ];

  searchTerm: string = '';
  searchType: string = 'ALL'; // Valor predeterminado

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
    if (this.searchType !== 'ALL') {
      this.grid.queryData({ product_type: this.searchType });
    } else {
      this.grid.reloadData();
    }
  }

  performSearch(): void {
    // Realizar búsqueda basada en 'searchTerm' en varios campos (nombre, localización, palabras clave, precio)
    // Lógica de búsqueda aquí...
  }
}
