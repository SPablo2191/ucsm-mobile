import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { PartialClassroom } from 'src/app/project/interfaces/classroom.interface';
import { PartialProfessor } from 'src/app/project/interfaces/professor.interface';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'subject-card',
  standalone: true,
  imports: [IonicModule, CommonModule],
  template: `
    <div [ngClass]="{ 'selected-card': selected }" class="card ion-margin">
      <div class="header">
        <div class="info">{{ selected ? 'En Curso' : '' }}</div>
        <div class="info text-right">Ver Materia ></div>
      </div>
      <div class="w-full overflow-hidden">
        <div class="title ">{{ title }}</div>
      </div>
      <div class="content">
        <div class="header">
          <div class="info">{{ typeCommission }}</div>
          <div class="info text-right">Aula: {{ classroom }}</div>
        </div>
        <div class="header">
          <div class="info">Docente: {{ professor }}</div>
          <div class="info text-right">Pabellón: {{ building }}</div>
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

      font-family: Roboto;
      word-wrap: break-word;
    }

    .title {
      height: 39px;
      font-size: 16px;
      font-weight: 700;
	  text-overflow: ellipsis;
    }

    .info {
		width: 144px;
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
export class SubjectCardComponent implements OnInit {
  @Input() selected: boolean = false;
  @Input() title!: string;
  @Input() commission!: string;
  @Input() professor!: string;
  @Input() classroom!: string;
  @Input() building!: string;
  typeCommission: string = '';
  ngOnInit(): void {
    if (this.commission) {
      const regex = /^[0-9]+$/;
      if (regex.test(this.commission)) {
        this.typeCommission = 'Practica';
      } else {
        this.typeCommission = 'Teoria';
      }
    }
  }
}
