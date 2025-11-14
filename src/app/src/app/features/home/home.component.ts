import { Component } from '@angular/core';
import { ScrollingPicturesComponent } from '../../shared/components/scrolling-pictures/scrolling-pictures.component';

@Component({
  selector: 'app-home',
  imports: [ScrollingPicturesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  projectImages: any[] = [
    {
      url: './images/goldmine-logo-icon.png',
      title: 'Goldmine',
    },
    {
      url: './images/Steve_Steve.png',
      title: 'STEVE',
    },
    {
      url: './images/sko_logo.png',
      title: 'Events App',
    },
    {
      url: './images/beetok_logo.png',
      title: 'Beetok',
    },
    {
      url: './images/DataMyte_Main Logo.svg',
      title: 'Datamyte',
    },
    {
      url: './images/GAMEON_LOGO_DARK.png',
      title: 'GameOn',
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
