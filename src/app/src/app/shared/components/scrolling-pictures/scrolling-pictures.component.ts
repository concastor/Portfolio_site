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

  private animationFrameId: any;
  duplicatedImages: any[] = [];
  private scrollSpeed = 0.5;

  imageSetWidth = (500 + 25) * this.images?.length || 0;

  ngOnInit(): void {
    this.duplicatedImages = [...this.images, ...this.images];

    // this.autoScroll();
    //set how often it scrolls
    // setInterval(() => {
    //   this.autoScroll();
    // }, 30);
  }

  // autoScroll(): void {
  //   const animate = () => {
  //     //throw a hover here later
  //     const container = this.scrollContainer.nativeElement;
  //     container.scrollLeft = this.imageSetWidth;
  //     // const scrollAmount = 1;
  //     // const maxScroll = container.scrollWidth - container.clientWidth;

  //     container.scrollLeft += this.scrollSpeed;
  //     console.log('anuimating', container.scrollLeft);
  //     if (container.scrollLeft >= this.imageSetWidth * 2) {
  //       container.scrollLeft = this.imageSetWidth;
  //     }

  //     this.animationFrameId = requestAnimationFrame(animate);

  //     // // If we've reached the end, scroll back to the beginning
  //     // if (container.scrollLeft >= maxScroll - 1) {
  //     //   container.scrollTo({
  //     //     left: 0,
  //     //     behavior: 'smooth',
  //     //   });
  //     // } else {
  //     //   container.scrollBy({
  //     //     left: scrollAmount,
  //     //     behavior: 'smooth',
  //     //   });
  //     // }
  //   };
  //   this.animationFrameId = requestAnimationFrame(animate);
  // }

  scroll(direction: 'left' | 'right'): void {
    const container = this.scrollContainer.nativeElement;
    const scrollAmount = 300;

    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  }
}
