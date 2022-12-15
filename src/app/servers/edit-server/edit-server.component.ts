import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ServersServicesService } from 'src/app/services/servers.services.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html'
})
export class EditServerComponent {
  allowEdit = false;
  constructor(private serversService: ServersServicesService,
              private route: ActivatedRoute) { }
  ngOnInit() {
    this.route.queryParams.subscribe(
      (queryParams: Params) => {
        this.allowEdit = queryParams['allowEdit'] === '1';
      }
    )
  }
}
