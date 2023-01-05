import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EdiHorarioPageRoutingModule } from './edi-horario-routing.module';

import { EdiHorarioPage } from './edi-horario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EdiHorarioPageRoutingModule
  ],
  declarations: [EdiHorarioPage]
})
export class EdiHorarioPageModule {}
