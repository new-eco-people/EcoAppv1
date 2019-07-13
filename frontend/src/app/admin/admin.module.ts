import { NgModule } from '@angular/core';
import { AdminSharedModule } from 'app/admin/admin.shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';

@NgModule({
  declarations: [AdminComponent],
  imports: [
    AdminSharedModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
