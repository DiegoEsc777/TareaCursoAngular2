import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HarrypotterdetailComponent } from './harrypotterdetail.component';

const routes: Routes = [{ path: '', component: HarrypotterdetailComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HarrypotterdetailRoutingModule { }
