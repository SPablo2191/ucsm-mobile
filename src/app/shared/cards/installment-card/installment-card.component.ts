import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-installment-card',
  standalone: true,
  imports: [CommonModule],
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
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.20);
      border-radius: 5px;
      display: flex;
	  color:  #515a5a;
      flex-direction: column;
      justify-content: space-between;
      padding: 8px;
    }

    .header {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }

    .title, .info {
      width: 144px;
      font-family: Roboto;
      word-wrap: break-word;
    }

    .title {
      height: 39px;
      font-size: 16px;
      font-weight: 700;
    }

    .info {
      height: 14px;
      font-size: 10px;
      font-weight: 400;
    }

    .selected-card {
      background-color: #05BE6A; /* Color de fondo verde */
    }

    .selected-card .title, .selected-card .info {
      color: white; /* Color de texto blanco */
    }

    .selected-card .link {
      color: white; /* Color de texto blanco */
    }

  `,
})
export class InstallmentCardComponent {}
