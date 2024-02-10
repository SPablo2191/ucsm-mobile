import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'subject-card',
  standalone: true,
  imports: [IonicModule],
  template: `
    <ion-card class="card ">
      <ion-card-header>
        <ion-card-title>
          <div class="flex justify-content-between align-items-center mx-2">
            <p class="font-bold text-sm">En curso</p>
            <p class="font-italic text-xs">Ver Materia ></p>
          </div>
        </ion-card-title>
        <ion-card-subtitle>
          <p class="font-bold text-xl text-left">Introducción a la Programación</p>
        </ion-card-subtitle>
      </ion-card-header>

      <ion-card-content>
        <p></p>
      </ion-card-content>
    </ion-card>
  `,
  styles: `
  .card{
	  background: linear-gradient(180deg, #05BE6A 0%, #099957 100%); box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); border-radius: 5px;
  }`,
})
export class SubjectCardComponent {}
