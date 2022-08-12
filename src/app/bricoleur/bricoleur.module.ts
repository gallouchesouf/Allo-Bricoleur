import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { BricoleurRoutingModule } from './bricoleur-routing.module';
import { ViewMissionComponent } from './components/view-mission/view-mission.component';
import { BricoleurComponent } from './bricoleur.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AddFormBricoleurComponent } from './components/add-form-bricoleur/add-form-bricoleur.component';


@NgModule({
  declarations: [
    AddFormBricoleurComponent,
    ViewMissionComponent,
    BricoleurComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BricoleurRoutingModule
  ]
})
export class BricoleurModule { }
