import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tab-calendar',
  },
  {
    path: '**',
    redirectTo: 'tab-calendar',
  },
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'tab-calendar',
        loadChildren: () =>
          import('./tab-calendar/tab-calendar.module').then(
            (m) => m.TabCalendarPageModule
          ),
      },
      {
        path: 'tab-saints',
        loadChildren: () =>
          import('./tab-saints/tab-saints.module').then(
            (m) => m.TabSaintsPageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
