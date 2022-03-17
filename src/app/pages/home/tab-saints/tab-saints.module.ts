import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabSaintsPageRoutingModule } from './tab-saints-routing.module';

import { TabSaintsPage } from './tab-saints.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabSaintsPageRoutingModule
  ],
  declarations: [TabSaintsPage]
})
export class TabSaintsPageModule {}
