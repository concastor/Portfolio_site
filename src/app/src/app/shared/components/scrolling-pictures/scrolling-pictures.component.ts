import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  Input,
  input,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-scrolling-pictures',

  imports: [CommonModule],
  templateUrl: './scrolling-pictures.component.html',
  styleUrl: './scrolling-pictures.component.scss',
})
export class ScrollingPicturesComponent implements OnInit {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  @Input({ required: true }) images!: any[];
  @Input() title: string = 'content';

  duplicatedImages: any[] = [];
  randomOffset = '0ms';

  ngOnInit(): void {
    this.duplicatedImages = [...this.images, ...this.images];
    this.randomOffset = Math.floor(Math.random() * 1000) + 'ms';

    console.log('randome', this.randomOffset);
    // this.autoScroll();
    //set how often it scrolls
    // setInterval(() => {
    //   this.autoScroll();
    // }, 30);
  }

  scroll(direction: 'left' | 'right'): void {
    const container = this.scrollContainer.nativeElement;
    const scrollAmount = 300;

    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  }
}
