import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsistenciaEPageRoutingModule } from './asistencia-e-routing.module';

import { AsistenciaEPage } from './asistencia-e.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsistenciaEPageRoutingModule
  ],
  declarations: [AsistenciaEPage]
})
export class AsistenciaEPageModule {}
