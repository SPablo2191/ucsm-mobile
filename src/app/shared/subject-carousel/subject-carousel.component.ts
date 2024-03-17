import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from '@angular/core';
import { SubjectCardComponent } from '../cards/subject-card/subject-card.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { UiCardComponent } from '../ui/ui-card/ui-card.component';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'subject-carousel',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonicModule, SubjectCardComponent, CommonModule],
  template: `<swiper-container
      [options]="{ slidesPerView: true, loop: true }"
      *ngIf="items.length !== 0; else elseblock"
    >
      <swiper-slide *ngFor="let item of items">
        <subject-card [selected]="true" />
      </swiper-slide>
    </swiper-container>
    <ng-template #elseblock>
      <div class="message my-6">No hay materias disponibles</div>
    </ng-template> `,
  styles: `
  .message {
  text-align: center;
  color: #575756;
  font-size: 20px;
  font-family: Roboto;
  font-weight: 500;
  font-weight: bold;
  word-wrap: break-word;
}`,
})
export class SubjectCarouselComponent {
  @Input() items!: any[];
  slideOpt = {
    direction: 'horizontal',
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
    },
  };
}
