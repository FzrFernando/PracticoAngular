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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    UsersModule,
    ServersModule,
    HttpClientModule,
    UsersModule
  ],
  providers: [UsersServicesService],
  bootstrap: [AppComponent],
  exports:[
    HomeComponent
  ]
})
export class AppModule { }
