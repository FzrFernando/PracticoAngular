import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServersServicesService } from 'src/app/services/servers.services.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html'
})
export class EditServerComponent {
  constructor(private serversService: ServersServicesService,
    private route: ActivatedRoute) { }
  ngOnInit() {
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);
  }
}
