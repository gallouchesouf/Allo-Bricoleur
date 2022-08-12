import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { AddFormClientComponent } from './components/add-form-client/add-form-client.component';
import { ListMissionComponent } from './components/list-mission/list-mission.component';
import { ClientComponent } from './client.component';


@NgModule({
  declarations: [
    ClientComponent,
    AddFormClientComponent,
    ListMissionComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule
  ]
})
export class ClientModule { }
