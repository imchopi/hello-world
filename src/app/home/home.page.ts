import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './user';
import { ToastController, ToastOptions } from '@ionic/angular';
import { Router } from '@angular/router';
import { UserInfoFavClicked } from './user-info/user-info-fav-clicked';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {
	private _users:BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
	users$:Observable<User[]> = this._users.asObservable();

	constructor(
		private _route: Router,
		private toast:ToastController
	  ) {}

	// In the component's ngOnInit method
	ngOnInit(): void {
    let users: User[] = [
      { id:1, name: 'Adrián', surname: 'Perogil', age: 26, fav: false},
      { id:2, name: 'Daniel', surname: 'Ávila', age: 19, fav: true},
      { id:3, name: 'Juanjo', surname: 'Atienza', age: 26, fav: true},
      { id:4, name: 'Chopito', surname: 'Chingón', age: 26, fav: true},
      { id:5, name: 'Daniel', surname: 'Luque', age: 20, fav: false},
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

	onFavClicked(user:User, event:UserInfoFavClicked){
		const users = [...this._users.value];
		var index = users.findIndex((_user)=>_user.id == user.id);
		if(index!=-1)
		  users[index].fav = event.fav??false;
		this._users.next([...users]);
		const options:ToastOptions = {
		  message:`User ${event.fav?'added':'removed'} ${event.fav?'to':'from'} favourites`,
		  duration:1000,
		  position:'bottom',
		  color:'danger',
		  cssClass:'fav-ion-toast'
		};
		this.toast.create(options).then(toast=>toast.present());
	  }

	  welcome() {
		this._route.navigate(["./welcome"])
	  }
}