import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'subject-card',
  standalone: true,
  imports: [IonicModule],
  template: `
    <div class="card ion-margin">
      <div class="header">
        <div class="info">En curso</div>
        <div class="info text-right">Ver Materia ></div>
      </div>
      <div class="title">Introducción a la Programación</div>
      <div class="content">
        <div class="header">
          <div class="info">Práctica</div>
          <div class="info text-right">Aula: 3</div>
        </div>
        <div class="header">
          <div class="info">Docente: Angulo Osorio</div>
          <div class="info text-right">Pabellón: L</div>
        </div>
      </div>
    </div>
  `,
  styles: `
.card {
  background-color: #05BE6A;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.20);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 8px;
}

.header {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.title {
  width: 144px;
  height: 39px;
  color: white;
  font-size: 16px;
  font-family: Roboto;
  font-weight: 700;
  word-wrap: break-word;
}

.info {
  width: 144px;
  height: 14px;
  color: white;
  font-size: 10px;
  font-family: Roboto;
  font-weight: 400;
  word-wrap: break-word;
}

.link {
  font-size: 9px;
  font-family: Roboto;
  font-weight: 300;
  word-wrap: break-word;
}

`,
})
export class SubjectCardComponent {}
