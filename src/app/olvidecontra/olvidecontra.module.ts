import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OlvidecontraPageRoutingModule } from './olvidecontra-routing.module';

import { OlvidecontraPage } from './olvidecontra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OlvidecontraPageRoutingModule
  ],
  declarations: [OlvidecontraPage]
})
export class OlvidecontraPageModule {}
