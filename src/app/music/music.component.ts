import { Component, Input , Output} from '@angular/core';
import {OnInit} from '@angular/core';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent  {
  @Input() musicDetails;
  @Input() priceList;
  @Output() delete = new EventEmitter();
   something;
  constructor() { }

  onmediagetresults() {
  }

  OnInit() {
  }

  removeEvent() {
    this.delete.emit(this.musicDetails);
  }



  addEvent(){
    console.log('Added');
  }


}
