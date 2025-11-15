import { CommonModule } from '@angular/common';
import { Component, input, OnInit } from '@angular/core';
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
  productName = 'Goldmine';
  projects: any[] = [
    { label: 'Goldmine', url: 'goldmine' },
    { label: 'Steve', url: 'steve' },
    { label: 'Events App', url: 'ultraphone' },
    // { label: 'Beetok', url: 'beetok' },
    // { label: 'Datamyte', url: 'datamyte' },
    // { label: 'GameOn', url: 'gameon' },
  ];
  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.route.params.subscribe((params) => {
      console.log(params['project']);
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
