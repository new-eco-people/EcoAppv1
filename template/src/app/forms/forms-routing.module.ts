import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValidationFormsComponent } from "./validation/validation-forms.component";
import { BasicComponent } from './layouts/basic/basic.component';
import { HorizontalComponent } from './layouts/horizontal/horizontal.component';
import { HiddenLabelsComponent } from './layouts/hidden-labels/hidden-labels.component';
import { FormActionsComponent } from './layouts/form-actions/form-actions.component';
import { BorderedComponent } from './layouts/bordered/bordered.component';
import { StripedRowsComponent } from './layouts/striped-rows/striped-rows.component';
import { InputsComponent } from './elements/inputs/inputs.component';
import { InputGroupsComponent } from './elements/input-groups/input-groups.component';
import { InputGridComponent } from './elements/input-grid/input-grid.component';
import { ArchwizardComponent } from './archwizard/archwizard.component';

const routes: Routes = [
  {
    path: '',    
    children: [
      {
        path: 'basic',
        component: BasicComponent,
        data: {
          title: 'Basic Forms'
        }
      },
      {
        path: 'horizontal',
        component: HorizontalComponent,
        data: {
          title: 'Horizontal Forms'
        }
      },
      {
        path: 'hidden-labels',
        component: HiddenLabelsComponent,
        data: {
          title: 'Hidden Labels'
        }
      },
      {
        path: 'form-actions',
        component: FormActionsComponent,
        data: {
          title: 'Form Actions'
        }
      },
      {
        path: 'bordered',
        component: BorderedComponent,
        data: {
          title: 'Bordered Forms'
        }
      },
      {
        path: 'striped-rows',
        component: StripedRowsComponent,
        data: {
          title: 'Striped Rows'
        }
      },
      {
        path: 'inputs',
        component: InputsComponent,
        data: {
          title: 'Inputs'
        }
      },
      {
        path: 'input-groups',
        component: InputGroupsComponent,
        data: {
          title: 'Input Groups'
        }
      },
      {
        path: 'input-grid',
        component: InputGridComponent,
        data: {
          title: 'Input Grid'
        }
      },
      {
        path: 'validation',
        component: ValidationFormsComponent,
        data: {
          title: 'Validation Forms'
        }
      },       
      {
        path: 'ngx',
        loadChildren: './ngx-wizard/ngx-wizard.module#NGXFormWizardModule'
      },
      {
        path: 'archwizard',
        component: ArchwizardComponent,
        data: {
          title: 'Angular Wizard Forms'
        }
      }
            
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormsRoutingModule { }
