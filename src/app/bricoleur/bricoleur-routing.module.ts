import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BricoleurComponent } from './bricoleur.component';
import { AddFormBricoleurComponent } from './components/add-form-bricoleur/add-form-bricoleur.component';

const routes: Routes = [
  {
    path: "",
    component: BricoleurComponent,
    children: [
      { path: "", component: AddFormBricoleurComponent },
      // { path: "dashboard-teacher", component: DashboardTeacherComponent },
      // { path: "dashboard-student", component: DashboardStudentComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BricoleurRoutingModule { }
