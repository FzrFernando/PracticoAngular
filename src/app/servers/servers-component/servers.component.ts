import { Component } from '@angular/core';
import { ServersServicesService } from 'src/app/services/servers.services.service';
import { ServersInterfaces } from '../../interfaces/servers.interfaces';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html'
})
export class ServersComponent {

  constructor(private bsServer:ServersServicesService){

  }

  get servers():ServersInterfaces[]{
    return this.bsServer.servers;
  }
}
