import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabSaintsPage } from './tab-saints.page';

const routes: Routes = [
  {
    path: '',
    component: TabSaintsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabSaintsPageRoutingModule {}
