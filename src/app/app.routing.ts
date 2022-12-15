import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ComponentesusersComponent } from './users/componentesusers/componentesusers.component';
import { ServersComponent } from './servers/servers-component/servers.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
    },
    { path: 'users', component: ComponentesusersComponent, children: [
      { path: ':id/:name', component: ComponentesusersComponent },
      ]
    },
    { path: 'servers', component: ServersComponent, children: [
      { path: ':id/edit', component: EditServerComponent },
      { path: ':id', component: ServersComponent }
    ] 
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