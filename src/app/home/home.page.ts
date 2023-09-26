import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  users = [
    { nombre: 'Adrián', apellido: 'Perogil', edad: 27},
    { nombre: 'Daniel', apellido: 'Ávila', edad: 19},
    { nombre: 'Diego', apellido: 'León', edad: 21},
    { nombre: 'Javier', apellido: 'Antidisturbio', edad: 82},
    { nombre: 'Marco', apellido: 'Pete', edad: 22},
  ]

  constructor() {
  }
}
