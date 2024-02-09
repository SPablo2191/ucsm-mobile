import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-ui-tabs',
  standalone: true,
  imports: [IonicModule],
  template: `
    <ion-tabs class="bg-white">
      <ion-tab-bar slot="bottom" class="bg-white">
        <ion-tab-button tab="schedule" class="bg-white">
          <ion-icon name="calendar"></ion-icon>
          Horario
        </ion-tab-button>
        <ion-tab-button tab="installment" class="bg-white">
          <ion-icon name="cash"></ion-icon>
          Deuda
        </ion-tab-button>
        <ion-tab-button (click)="goToHome()" class="home-button">
          <ion-icon name="home"></ion-icon>
          Inicio
        </ion-tab-button>
        <ion-tab-button tab="career-profile" class="bg-white">
          <ion-icon name="school"></ion-icon>
          Carrera
        </ion-tab-button>
        <ion-tab-button tab="grade" class="bg-white">
          <ion-icon name="ribbon"></ion-icon>
          Notas
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  `,
  styles: `
  .home-button{
	background: linear-gradient(180deg, #05BE6A 0%, #099957 100%);
	color : white;
	width: 60px; height: 50px;
	border-radius: 9999px;
  }`,
})
export class UiTabsComponent {
  constructor(private router: Router) {}
  goToHome() {
    this.router.navigate(['/private/home']);
  }
}
