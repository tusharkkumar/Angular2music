import { Component } from '@angular/core';
import { MusicComponent } from './music/music.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';
  text = 'tushar is very beautiful';


  mediaLists = [
    {
        title: 'Life of a Scientist',
    description: 'This music represents the life of Scientists',
         price: 200,
         available: true


    },
    {
        title: 'Life of a Doctor',
    description:  'This music represents the life of Doctor',
    price: 180,
    available: true
    },
    {
        title: 'Life of a Analitics',
    description: 'This music represents the life of a Analitics',
    price: 210,
    available: true

    }
  ];
  paidMusic = {
    price: 200,
    date: new Date()
  };


}
