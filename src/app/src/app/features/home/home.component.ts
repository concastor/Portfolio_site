import { Component } from '@angular/core';
import { ScrollingPicturesComponent } from '../../shared/components/scrolling-pictures/scrolling-pictures.component';

@Component({
    selector: 'app-home',
    imports: [ScrollingPicturesComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {
  projectImages: any[] = [
    {
      url: './images/cube-image.jpg',
      title: 'Goldmine',
    },
    {
      url: './images/steve-home.png',
      title: 'STEVE',
    },
    {
      url: './images/beetok-home.png',
      title: 'Project 3',
    },
    {
      url: './images/ultraphone-home.png',
      title: 'Project 4',
    },
    {
      url: './images/sko-home.png',
      title: 'Project 5',
    },
    {
      url: './images/gameon-home.png',
      title: 'Project 6',
    },
  ];

  carvingImages: any[] = [
    {
      url: './images/engagement-box.JPEG',
      title: 'Walnut Ring Box',
    },
    {
      url: '/images/maui face.JPEG',
      title: 'Moai Face',
    },
    {
      url: '/images/spheal carving.JPEG',
      title: 'Spheal and a bench',
    },
    {
      url: '/images/ball in container.JPEG',
      title: 'Balls in Cage',
    },
    {
      url: '/images/Bear carving.JPEG',
      title: 'Large Bear (WIP)',
    },
    {
      url: '/images/chain carving.JPEG',
      title: 'Wooden Chain',
    },
  ];
}
