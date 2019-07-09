import { NgModule } from '@angular/core';
import { AdminSharedModule } from 'app/shared/modules/admin.shared.module';
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
