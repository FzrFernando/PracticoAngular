import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ComponentesusersComponent } from './users/componentesusers/componentesusers.component';
import { ServersComponent } from './servers/servers-component/servers.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

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
        path: 'servers',
        component: ServersComponent
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
  ],
  declarations: []
})

export class AppRoutingModule { }