import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { AuthFullComponent } from './layouts/auth-full/auth-full.component';

export const Approutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'component',
        loadChildren: () => import('./component/component.module').then(m => m.ComponentsModule)
      },      
    ]
  },
  {
    path: '',
    component: AuthFullComponent ,
    children: [
      { path: '', redirectTo: '/auth', pathMatch: 'full' },
      {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
      },      
    ]
  },
  {
    path: '**',
    redirectTo: '/dashboard'
  }
];
