import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import{HarrypotterComponent} from './components/harrypotter/harrypotter.component'

const routes: Routes = [
  {path: 'home', component: HarrypotterComponent},
  /*{path: '', redirectTo:'/home', pathMatch:'full'},*/

  { path: 'gameofthrone', loadChildren: () => import('./gameofthrone/gameofthrone.module').then(m => m.GameofthroneModule) },
  { path: 'harrypotterdetail', loadChildren: () => import('./harrypotterdetail/harrypotterdetail.module').then(m => m.HarrypotterdetailModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
