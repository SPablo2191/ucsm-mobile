import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'subject-simple-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card ion-margin" (click)="goToSite()">
      <div class="grid">
        <div class="col-9">
          <div class="title">{{ title }}</div>
          <div class="info">Ver Materia >></div>
        </div>
        <div class="col-3">
          <div class="flex flex-column">
            <div class=" flex justify-content-center">
              <span class="title" *ngIf="quantity > 0">{{ quantity }}</span>
            </div>
            <div class="info flex justify-content-center">{{ info }}</div>
          </div>
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


    .title {
      font-size: 18px;
      font-weight: 700;
	  overflow: hidden;
	  white-space: nowrap;
	  text-overflow: ellipsis;
    }
	.quantity{
		font-size: 25px;
	}

    .info {
      height: 14px;
      font-size: 10px;
      font-weight: 400;
	  word-wrap: break-word;
    }

    .selected-card {
      background-color: #05BE6A;
    }

    .selected-card .title, .selected-card .info {
      color: white;
    }

    .selected-card .link {
      color: white;
    }

  `,
})
export class SubjectSimpleCardComponent {
  @Input() title: string = '';
  @Input() quantity: number = 0;
  @Input() info: string = '';
  @Input() path!: string;
  constructor(private router: Router) {}

  goToSite() {
    if (this.path) {
      this.router.navigate([this.path]);
    }
  }
}
