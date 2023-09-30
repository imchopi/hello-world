import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { UserInfoComponent } from './user-info/user-info.component'
import { HomePageRoutingModule } from './home-routing.module';
import { FirstCharPipe } from '../pipes/first-char.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,

  ],
  declarations: [
    HomePage,
    UserInfoComponent,
    FirstCharPipe,

  ]
})
export class HomePageModule {}
