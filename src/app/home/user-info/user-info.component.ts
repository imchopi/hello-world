import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserInfoFavClicked } from './user-info-fav-clicked';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})

export class UserInfoComponent implements OnInit {
  @Input() user?: {
    id?: number,
    name?: string,
    surname?: string,
    age?: number
    fav?: boolean
  }

  @Output() onFavClicked:EventEmitter<UserInfoFavClicked> = new EventEmitter<UserInfoFavClicked>

  constructor() { }

  onFavClick(event:any){
    this.onFavClicked.emit ({
      fav:!(this.user?.fav??false)
    })
    event.stopPropagation()
  }

  ngOnInit() {}

}
