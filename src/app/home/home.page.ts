import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './user';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {

  private _users:BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  
  users$:Observable<User[]> = this._users.asObservable();

  users = [
    { nombre: 'Adrián', apellido: 'Perogil', edad: 27},
    { nombre: 'Daniel', apellido: 'Ávila', edad: 19},
    { nombre: 'Diego', apellido: 'León', edad: 21},
    { nombre: 'Javier', apellido: 'Antidisturbio', edad: 82},
    { nombre: 'Marco', apellido: 'Pete', edad: 22},
  ]

  constructor() {
  }
  
  ngOnInit(): void {
    setTimeout(() => {
      this._users.next(this.users); 
    }, 1000);
     
  }
}
