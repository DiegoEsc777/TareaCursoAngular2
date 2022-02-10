import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HarrypotterdetailRoutingModule } from './harrypotterdetail-routing.module';
import { HarrypotterdetailComponent } from './harrypotterdetail.component';


@NgModule({
  declarations: [
    HarrypotterdetailComponent
  ],
  imports: [
    CommonModule,
    HarrypotterdetailRoutingModule
  ]
})
export class HarrypotterdetailModule { }
