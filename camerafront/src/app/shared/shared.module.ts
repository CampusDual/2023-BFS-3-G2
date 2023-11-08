import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {  OntimizeWebModule } from 'ontimize-web-ngx';
import { StatusColumnRendererComponent } from '../main/profile/my-rentals-home/status-column-renderer/status-column-renderer.component';

export function calculateProfitFunction (rowData: Array<any>): number {
  const diferenciaEnMilisegundos = rowData["end_date"] - rowData["start_date"];
  // Convertir la diferencia a días
  const diferenciaEnDias = diferenciaEnMilisegundos / (1000 * 60 * 60 * 24);
  return diferenciaEnDias * rowData["price"]
}
@NgModule({
  imports: [
    OntimizeWebModule
    
  ],
  declarations: [
    StatusColumnRendererComponent
  ],
  exports: [
    CommonModule,
    StatusColumnRendererComponent
  ]
})
export class SharedModule { }
