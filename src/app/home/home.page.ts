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

  constructor() {}

	// En el método ngOnInit del componente
	ngOnInit(): void {
    let users: User[] = [
      { nombre: 'Adrián', apellido: 'Perogil', edad: 27},
      { nombre: 'Daniel', apellido: 'Ávila', edad: 19},
      { nombre: 'Diego', apellido: 'León', edad: 21},
      { nombre: 'Javier', apellido: 'Antidisturbio', edad: 82},
      { nombre: 'Marco', apellido: 'Pete', edad: 22},
    ]
    var index = 0
	  // Utilizamos setInterval para agregar usuarios adicionales al BehaviorSubject cada segundo
	  setInterval(() => {
	    if (index < 5) {
	      let user: User[] = this._users.value; // Obtenemos la lista actual de usuarios
	      user.push(users[index]); // Agregamos un usuario de la lista actual al final
	      this._users.next(user); // Actualizamos el BehaviorSubject con la nueva lista
	      index++; // Incrementamos el índice para seleccionar el próximo usuario
	    }
	  }, 1000);
	}
}