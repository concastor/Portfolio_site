import { CommonModule, ViewportScroller } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  inject,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { projects } from '../../shared/constants/projects';
import { TabsComponent } from '../tabs/tabs.component';
import { SectionBlockComponent } from '../../layout/section-block/section-block.component';
@Component({
  selector: 'app-projects',
  imports: [CommonModule, TabsComponent, SectionBlockComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit, AfterViewInit {
  @ViewChildren(SectionBlockComponent)
  sections!: QueryList<SectionBlockComponent>;

  private observer?: IntersectionObserver;
  private readonly viewportScroller = inject(ViewportScroller);

  selectedProduct: any;
  productName = 'goldmine';

  projects: any[] = [
    { label: 'Goldmine', url: 'goldmine' },
    { label: 'Events App', url: 'ultraphone' },
    { label: 'Steve', url: 'steve' },
    // { label: 'Beetok', url: 'beetok' },
    // { label: 'Datamyte', url: 'datamyte' },
    // { label: 'GameOn', url: 'gameon' },
  ];

  //tab scrolling information
  tabs = [
    'Home',
    'Problem',
    'Tech Stack',
    'Features',
    'My Contribution',
    'Results',
  ];

  activeSection: string = this.tabs[0];
  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.productName =
        this.route.snapshot.paramMap.get('project') ?? this.productName;
      this.selectedProduct =
        projects[this.productName as keyof typeof projects];
    });
  }
  ngAfterViewInit(): void {
    //offset viewpoint to include fancy waves
    this.viewportScroller.setOffset([0, 50]);

    //observer to check current scroll location
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.activeSection = entry.target.id || this.tabs[0];
            this.cdr.detectChanges();
          }
        });
      },
      { threshold: 0.4 }, //% viewable
    );

    this.sections.forEach((section) => {
      this.observer?.observe(section.elementRef.nativeElement);
    });
  }

  goToProject(selected: ''): void {
    this.router.navigate(['/portfolio', selected]);
  }

  scrollToSection(section: string) {
    this.viewportScroller.scrollToAnchor(section);
  }
}
