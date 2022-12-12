import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServersServicesService } from 'src/app/services/servers.services.service';
import { ServersInterfaces } from '../../interfaces/servers.interfaces';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html'
})
export class ServersComponent {

  constructor(private bsServer:ServersServicesService,
              private router: Router,
              private route: ActivatedRoute){

  }

  get servers():ServersInterfaces[]{
    return this.bsServer.servers;
  }

  onReload(){
    //this.router.navigate(['servers'], {relativeTo: this.route});
  }
}
