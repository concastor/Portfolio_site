import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { projects } from '../../shared/constants/projects';
@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit {
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
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.productName =
        this.route.snapshot.paramMap.get('project') ?? this.productName;
      this.selectedProduct =
        projects[this.productName as keyof typeof projects];
    });
  }

  goToProject(selected: ''): void {
    this.router.navigate(['/portfolio', selected]);
  }
}
