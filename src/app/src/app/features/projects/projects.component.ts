import { CommonModule, ViewportScroller } from '@angular/common';
import {
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
export class ProjectsComponent implements OnInit {
  @ViewChildren('section') sections!: QueryList<ElementRef>;

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
  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.productName =
        this.route.snapshot.paramMap.get('project') ?? this.productName;
      this.selectedProduct =
        projects[this.productName as keyof typeof projects];
    });

    this.viewportScroller.setOffset([0, 80]); // 80px from top
  }

  goToProject(selected: ''): void {
    this.router.navigate(['/portfolio', selected]);
  }

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

  scrollToSection(section: string) {
    this.viewportScroller.scrollToAnchor(section);
  }
}
