import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentesusersComponent } from './componentesusers/componentesusers.component';
import { UsersServicesService } from '../services/users.services.service';



@NgModule({
  declarations: [
    ComponentesusersComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ComponentesusersComponent
  ],
  providers: [
    UsersServicesService
  ]
})
export class UsersModule { }
