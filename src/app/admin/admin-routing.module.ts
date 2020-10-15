import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminPage } from './admin.page';

const routes: Routes = [
  {
    path: '',
    component: AdminPage
  },
  {
    path: 'add-data',
    loadChildren: () => import('./admin-add/admin-add.module').then( m => m.AdminAddPageModule)
  },
  {
    path: ':adminId',
    loadChildren: () => import('./admin-edit/admin-edit.module').then( m => m.AdminEditPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPageRoutingModule {}
