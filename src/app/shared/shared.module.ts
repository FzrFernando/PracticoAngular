import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterLinkActive, RouterModule } from '@angular/router';
import { ServersServicesService } from '../services/servers.services.service';
import { UsersServicesService } from '../services/users.services.service';

@NgModule({
  declarations: [
    NavbarComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RouterLinkActive
  ],
  exports: [
    NavbarComponent,
    NotFoundComponent
  ],
  providers:[
    ServersServicesService,
    UsersServicesService
  ]
})
export class SharedModule { }
