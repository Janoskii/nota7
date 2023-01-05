import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EdiHorarioPage } from './edi-horario.page';

const routes: Routes = [
  {
    path: '',
    component: EdiHorarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EdiHorarioPageRoutingModule {}
