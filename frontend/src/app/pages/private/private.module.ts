import { NgModule } from '@angular/core';
import { PrivateRoutingModule } from './private-routing.module';
import { PrivateComponent } from './private.component';
import { PrivateSharedModule } from 'app/shared/modules/private.shared.module';

@NgModule({
  declarations: [PrivateComponent],
  imports: [
    PrivateSharedModule,
    PrivateRoutingModule
  ]
})
export class PrivateModule { }
