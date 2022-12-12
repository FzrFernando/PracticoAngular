import { Injectable } from '@angular/core';
import { ServersInterfaces } from '../interfaces/servers.interfaces';

@Injectable({
  providedIn: 'root'
})

export class ServersServicesService {
  private _servers:ServersInterfaces[]=[
    {
      id: 1,
      name: 'Productionserver',
      status: 'online'
      },
      {
      id: 2,
      name: 'Testserver',
      status: 'offline'
      },
      {
      id: 3,
      name: 'Devserver',
      status: 'offline'
      }
  ]
  constructor() { }

  get servers():ServersInterfaces[]{
    return [...this._servers]
  }
}
