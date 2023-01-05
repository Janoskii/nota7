import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuuPage } from './menuu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuuPageRoutingModule {}
