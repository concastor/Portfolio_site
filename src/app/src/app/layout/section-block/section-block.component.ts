import { Component, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-section-block',
  imports: [],
  templateUrl: './section-block.component.html',
  styleUrl: './section-block.component.scss',
})
export class SectionBlockComponent {
  @Input() type: string = '';

  constructor(public elementRef: ElementRef) {}
}
