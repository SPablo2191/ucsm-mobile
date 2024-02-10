import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'subject-card',
  standalone: true,
  imports: [IonicModule],
  template: `
    <ion-card class="card">
      <ion-card-header>
        <ion-card-title>
          <div class="flex justify-content-between align-items-center">
            <p class="font-bold text-xl text-white">Introducción a la Programación</p>
            <p class="font-italic text-white text-xs">Ver Materia ></p>
          </div>
          <p class="font-bold text-white">En curso</p>
        </ion-card-title>
        <ion-card-subtitle> </ion-card-subtitle>
      </ion-card-header>

      <ion-card-content>
        <div class="flex justify-content-between align-items-center">
          <p class="font-bold text-white">Practica</p>
          <p class="text-white">Aula: 3</p>
        </div>
        <div class="flex justify-content-between align-items-center">
          <p class="text-white">Docente: Angulo Osorio</p>
          <p class="text-white">Pabellon: L</p>
        </div>
      </ion-card-content>
    </ion-card>
  `,
  styles: `
  .card {
  background-color: #05BE6A; /* Color de fondo sólido */
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
}

ion-card-header,
ion-card-content {
  padding: 0.5rem; /* Ajustar el espacio interno */
}

ion-card-content > div {
  margin-bottom: 0.1rem; /* Ajustar la separación entre los elementos */
}`,
})
export class SubjectCardComponent {}
