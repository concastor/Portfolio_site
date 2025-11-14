import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollingPicturesComponent } from './scrolling-pictures.component';

describe('ScrollingPicturesComponent', () => {
  let component: ScrollingPicturesComponent;
  let fixture: ComponentFixture<ScrollingPicturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollingPicturesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollingPicturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
