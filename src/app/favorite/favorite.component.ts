import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

 @Input() isfavorite:boolean=false;
 @Output() change = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }


  myfavorite(){
    this.isfavorite=!this.isfavorite;
    this.change.emit();


  }


}
