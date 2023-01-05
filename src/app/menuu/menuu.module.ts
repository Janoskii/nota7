import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuuPageRoutingModule } from './menuu-routing.module';

import { MenuuPage } from './menuu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuuPageRoutingModule
  ],
  declarations: [MenuuPage]
})
export class MenuuPageModule {}
