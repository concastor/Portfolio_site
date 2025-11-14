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
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scrolling-pictures.component.html',
  styleUrl: './scrolling-pictures.component.scss',
})
export class ScrollingPicturesComponent implements OnInit {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  @Input({ required: true }) images!: any[];
  @Input() title: string = 'content';

  ngOnInit(): void {
    //set how often it scrolls
    setInterval(() => {
      this.autoScroll();
    }, 30);
  }

  autoScroll(): void {
    const container = this.scrollContainer.nativeElement;
    const scrollAmount = 1;
    const maxScroll = container.scrollWidth - container.clientWidth;

    // If we've reached the end, scroll back to the beginning
    if (container.scrollLeft >= maxScroll - 1) {
      container.scrollTo({
        left: 0,
        behavior: 'smooth',
      });
    } else {
      container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
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
