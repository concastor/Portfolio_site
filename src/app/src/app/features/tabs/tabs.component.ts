import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-tabs',
  imports: [],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss',
})
export class TabsComponent {
  tabs = input<string[]>([]);
  selectedTab = input<string>('');

  sectionSelected = output<string>();

  selected(selection: string): void {
    this.sectionSelected.emit(selection);
  }
}
