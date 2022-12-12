import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsersInterfaces } from 'src/app/interfaces/users.interfaces';

@Injectable({
  providedIn: 'root'
})
export class UsersServicesService {
  private url:string="http://localhost:3000/users"
  constructor(private http:HttpClient) { }

  get users():Observable<UsersInterfaces[]>{
    return this.http.get<UsersInterfaces[]>(this.url)
  }
}
