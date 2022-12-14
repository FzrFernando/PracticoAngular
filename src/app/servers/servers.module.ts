import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServersComponent } from './servers-component/servers.component';
import { RouterLinkActive, RouterModule } from '@angular/router';
import { EditServerComponent } from './edit-server/edit-server.component';



@NgModule({
  declarations: [
    ServersComponent,
    EditServerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RouterLinkActive
  ]
})
export class ServersModule { }
