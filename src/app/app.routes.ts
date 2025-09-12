   import { Routes } from '@angular/router';
   import { Layout } from './layout/layout';
   import { Dashboard } from './pages/dashboard/dashboard';
   import { Projects } from './pages/projects/projects';

   export const routes: Routes = [
     {
       path: '',
       component: Layout,
       children: [
         { path: 'dashboard', component: Dashboard },
         { path: 'projects', component: Projects },
         { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
       ],
     },
     { path: '**', redirectTo: 'dashboard' },
   ];