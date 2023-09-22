import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  isAlertOpen = false;
  public alertButtons = ['OK']

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }
}
