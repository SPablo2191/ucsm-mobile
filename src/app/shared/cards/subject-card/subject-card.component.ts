import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-subject-card',
  standalone: true,
  imports: [IonicModule],
  template: `
    <ion-card>
      <ion-card-header>
        <ion-card-title>Titulo</ion-card-title>
        <ion-card-subtitle>subtitulo</ion-card-subtitle>
      </ion-card-header>

      <ion-card-content>
        <p>body</p>
        <ng-content></ng-content>
      </ion-card-content>
    </ion-card>
  `,
  styles: ``,
})
export class SubjectCardComponent {}
