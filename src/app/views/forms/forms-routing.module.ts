import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { FormControlsComponent } from './form-controls/form-controls.component';
import { InputGroupsComponent } from './input-groups/input-groups.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Forms'
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'form-control'
      },
      {
        path: 'form-control',
        component: FormControlsComponent,
        data: {
          title: 'Form Control'
        }
      },
      
      {
        path: 'input-group',
        component: InputGroupsComponent,
        data: {
          title: 'Input Group'
        }
      },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule {
}
