import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './src/app/features/home/home.component';
import { HeaderComponent } from './src/app/layout/header/header.component';
import { FooterComponent } from './src/app/layout/footer/footer.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, HomeComponent, HeaderComponent, FooterComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio-site';
}
