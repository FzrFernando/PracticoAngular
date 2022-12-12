import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ComponentesusersComponent } from './users/componentesusers/componentesusers.component';
import { ServersComponent } from './servers/servers-component/servers.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { EditServerComponent } from './edit-server/edit-server.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
    },
    {
        path: 'users',
        component: ComponentesusersComponent
    },
    {
      path: 'users/:id/:name',
      component: ComponentesusersComponent
    },
    {
        path: 'servers',
        component: ServersComponent
    },
    {
      path: 'servers/:id/edit',
      component: EditServerComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];

@NgModule({
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }