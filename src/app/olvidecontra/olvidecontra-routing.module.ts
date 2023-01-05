import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OlvidecontraPage } from './olvidecontra.page';

const routes: Routes = [
  {
    path: '',
    component: OlvidecontraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OlvidecontraPageRoutingModule {}
