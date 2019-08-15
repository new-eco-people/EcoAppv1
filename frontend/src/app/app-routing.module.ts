import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/services/auth/auth-guard.service';
import { AppRoutes } from './shared/routes/app.routes';
import { PublicGuard } from './shared/guards/public.guard';


const appRoutes: Routes = [
  {
    path: '',
    redirectTo: AppRoutes.public.default,
    pathMatch: 'full',
  },
  // { path: '', component: FullLayoutComponent, data: { title: 'full Views' }, children: Full_ROUTES, canActivate: [AuthGuard] },
  // { path: '', component: ContentLayoutComponent, data: { title: 'content Views' }, children: CONTENT_ROUTES, canActivate: [AuthGuard] },

  {
    path: AppRoutes.public.default,
    loadChildren: './public/public.module#PublicModule',
    canActivate: [PublicGuard]
  },
  {
    path: AppRoutes.private.default,
    loadChildren: './private/private.module#PrivateModule',
    canActivate: [AuthGuard]
  },
  {
    path: AppRoutes.admin.default,
    loadChildren: './admin/admin.module#AdminModule',
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: AppRoutes.public.default,
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
