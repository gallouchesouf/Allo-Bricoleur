import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client.component';
import { AddFormClientComponent } from './components/add-form-client/add-form-client.component';

const routes: Routes = [
  {
    path:"",
    component:ClientComponent,
    children:[{
      path:"",component:AddFormClientComponent,
    }]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
