import { Component } from '@angular/core';

@Component({
  selector: 'app-album',
  imports: [],
  templateUrl: './album.component.html',
  styleUrl: './album.component.css'
})
export class AlbumComponent {

  pictures = [
    { src: 'assets/images/Nature1.jpg', title: 'Beach', url:'assets/images/Nature1.jpg' },
    { src: 'assets/images/Nature2.jpg', title: 'Mountains',url:'assets/images/Nature2.jpg' },
    { src: 'assets/images/Nature3.jpg', title: 'City Lights' },
    { src: 'assets/images/Pic001.jpg', title: 'Forest' ,url:'assets/images/Pic001.jpg'},
    { src: 'assets/images/Nature5.jpg', title: 'Beach' },
    { src: 'assets/images/Nature6.jpg', title: 'Mountains' },
    { src: 'assets/images/Nature7.jpg', title: 'City Lights' },
    { src: 'assets/images/Pic001.jpg', title: 'Forest' },
    { src: 'assets/images/Nature9.jpg', title: 'Beach' },
    { src: 'assets/images/Nature10.jpg', title: 'Mountains' },
    { src: 'assets/images/Nature11.jpg', title: 'City Lights' },
    { src: 'assets/images/Pic001.jpg', title: 'Forest' }
  ];



}
