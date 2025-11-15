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
    { label: 'Steve' },
    { label: 'Events App' },
    { label: 'Beetok' },
    { label: 'Datamyte' },
    { label: 'GameOn' },
  ];
  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.productName = this.route.snapshot.paramMap.get('project') ?? '';
    this.selectedProduct = projects[this.productName as keyof typeof projects];
    console.log('selected', this.selectedProduct, this.productName);
  }

  goToProject(selected: ''): void {
    this.router.navigate(['/portfolio', selected]);
  }

  features: { title: string; description: string }[] = [
    {
      title: 'prompt miner',
      description:
        'lorfjlakdj lakdjflk;dsjf ;kdljfa;dlkfja;dlk fjads;lja;lfkjasd;flkajd f;laksjdf;lkasd jlaksdf jalksjfa;dlsj',
    },
    {
      title: 'Goldmine Gems',
      description:
        'lorfjlakdj lakdjflk;dsjf ;kdljfa;dlkfja;dlk fjads;lja;lfkjasd;flkajd f;laksjdf;lkasd jlaksdf jalksjfa;dlsj',
    },
    {
      title: 'LISN Keywords',
      description:
        'lorfjlakdj lakdjflk;dsjf ;kdljfa;dlkfja;dlk fjads;lja;lfkjasd;flkajd f;laksjdf;lkasd jlaksdf jalksjfa;dlsj',
    },
    {
      title: 'Message Generator',
      description:
        'lorfjlakdj lakdjflk;dsjf ;kdljfa;dlkfja;dlk fjads;lja;lfkjasd;flkajd f;laksjdf;lkasd jlaksdf jalksjfa;dlsj',
    },
  ];

  // features = [
  //   ...this.features,
  //   ...this.features,
  //   ...this.features,
  //   ...this.features,
  // ];
}
