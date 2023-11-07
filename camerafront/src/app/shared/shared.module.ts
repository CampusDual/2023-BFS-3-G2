import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {  OntimizeWebModule } from 'ontimize-web-ngx';
import { StatusColumnRendererComponent } from '../main/profile/my-rentals-home/status-column-renderer/status-column-renderer.component';

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
