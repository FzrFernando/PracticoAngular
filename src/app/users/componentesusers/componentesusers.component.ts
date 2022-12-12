import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersInterfaces } from 'src/app/interfaces/users.interfaces';
import { UsersServicesService } from 'src/app/services/users.services.service';

@Component({
  selector: 'app-componentesusers',
  templateUrl: './componentesusers.component.html'
})
export class ComponentesusersComponent implements OnInit{
  users:UsersInterfaces[]=[]
  constructor(private userServer:UsersServicesService){ }

  ngOnInit(): void {
    this.userServer.users
    .subscribe({
      next:(resp)=>{this.users=resp},
      error:(error)=>{console.log(error)}
    })
  }
}
