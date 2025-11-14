import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
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
