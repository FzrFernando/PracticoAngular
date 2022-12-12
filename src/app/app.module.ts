import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { HomeComponent } from './home/home.component';
import { ServersModule } from './servers/servers.module';
import { UsersServicesService } from './services/users.services.service';
import { SharedModule } from './shared/shared.module';
import { UsersModule } from './users/users.module';
import { UserComponent } from './user/user.component';
import { EditServerComponent } from './edit-server/edit-server.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    EditServerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    UsersModule,
    ServersModule,
    HttpClientModule,
    UsersModule,
  ],
  providers: [UsersServicesService],
  bootstrap: [AppComponent],
  exports:[
    HomeComponent
  ]
})
export class AppModule { }
