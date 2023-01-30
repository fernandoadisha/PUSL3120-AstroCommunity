import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingComponent } from './components/partials/loading/loading.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  constructor (private router: Router) {
  }
}
