import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  showEvent = false;
  constructor(private router: Router) {}
  changeSection() {
    this.showEvent = !this.showEvent;
  }
  goToLogin() {
    this.router.navigate(['/login']);
  }
}
