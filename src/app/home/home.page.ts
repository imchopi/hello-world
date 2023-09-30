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

	// In the component's ngOnInit method
	ngOnInit(): void {
    let users: User[] = [
      { name: 'Adrián', surname: 'Perogil', age: 26},
      { name: 'Daniel', surname: 'Ávila', age: 19},
      { name: 'Juanjo', surname: 'Atienza', age: 26},
      { name: 'Chopito', surname: 'Chingón', age: 26},
      { name: 'Daniel', surname: 'Luque', age: 20},
    ]
    var index = 0
	  // We use setInterval to add additional users to the BehaviorSubject every second
	  setInterval(() => {
	    if (index < 5) {
	      let user: User[] = this._users.value;
	      user.push(users[index]);
	      this._users.next(user);
	      index++;
	    }
	  }, 1000);
	}
}