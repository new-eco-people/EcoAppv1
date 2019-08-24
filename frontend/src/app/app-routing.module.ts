import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/services/auth/auth-guard.service';
import { NotFoundComponent } from './public/pages/not-found/not-found.component';
import { AppRoutes } from './shared/routes/app.routes';

// Get the whole routes of the app
const routes = AppRoutes.generateRoutes();

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: routes.public.name,
    pathMatch: 'full',
  },
  // { path: '', comp adogo onent: FullLayoutComponent, data: { title: 'full Views' }, children: Full_ROUTES, canActivate: [AuthGuard] },

  {
    path: routes.public.name,
    loadChildren: './public/public.module#PublicModule',
  },
  {
    path: routes.private.name,
    loadChildren: './private/private.module#PrivateModule',
    canActivate: [AuthGuard]
  },
  {
    path: routes.admin.name,
    loadChildren: './admin/admin.module#AdminModule',
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
