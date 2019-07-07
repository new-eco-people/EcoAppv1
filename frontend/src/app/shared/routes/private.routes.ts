import { Routes } from '@angular/router';

// Routes for all private pages both full (sidebar included) or with just the content (no sidebar included)

export const PRIVATE_ROUTES: Routes = [
    {
        path: 'content-layout',
        loadChildren: './pages/content-layout-page/content-pages.module#ContentPagesModule'
      }
];
