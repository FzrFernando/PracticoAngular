import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
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

  // ngOnInit() {
  //   const id = this.route.snapshot.params['id'];
  //   this.server = this.bsServer.getServer(id);
  //   this.route.params.subscribe((params: Params) => {
  //   this.server = this.bsServer.getServer(params = id);
  // });

  get servers():ServersInterfaces[]{
    return this.bsServer.servers;
  }

  onReload(){
    //this.router.navigate(['servers'], {relativeTo: this.route});
  }

  onEdit() {
    this.router.navigate(['edit'], {relativeTo: this.route})
  }
}
