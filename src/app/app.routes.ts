import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'report-list',
    pathMatch: 'full'
  },
  {
    path: 'report-list',
    loadComponent: () => import('./Components/report-list/report-list.component').then(m => m.ReportListComponent)
  },
  {
    path: 'report-detail/:id',
    loadComponent: () => import('./Components/report-detail/report-detail.component').then(m => m.ReportDetailComponent)
  },
  {
    path: 'add-report',
    loadComponent: () => import('./Components/add-report/add-report.component').then(m => m.AddReportComponent)
  }
];
