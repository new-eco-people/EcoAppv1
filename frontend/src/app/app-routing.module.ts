import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/services/auth/auth-guard.service';
import { NotFoundComponent } from './public/pages/not-found/not-found.component';
import { AppRoutes } from './shared/routes/app.routes';



const appRoutes: Routes = [
  {
    path: '',
    redirectTo: AppRoutes.public.name,
    pathMatch: 'full',
  },
  // { path: '', component: FullLayoutComponent, data: { title: 'full Views' }, children: Full_ROUTES, canActivate: [AuthGuard] },

  {
    path: AppRoutes.public.name,
    loadChildren: './public/public.module#PublicModule',
  },
  {
    path: AppRoutes.private.name,
    loadChildren: './private/private.module#PrivateModule',
    canActivate: [AuthGuard]
  },
  {
    path: AppRoutes.admin.name,
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

export class AppRoutingModule {

}
