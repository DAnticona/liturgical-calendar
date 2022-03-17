import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabCalendarPageRoutingModule } from './tab-calendar-routing.module';

import { TabCalendarPage } from './tab-calendar.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabCalendarPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [TabCalendarPage],
})
export class TabCalendarPageModule {}
