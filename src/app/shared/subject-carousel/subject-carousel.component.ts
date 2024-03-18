import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from '@angular/core';
import { SubjectCardComponent } from '../cards/subject-card/subject-card.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { UiCardComponent } from '../ui/ui-card/ui-card.component';
import { PartialSubjectRegistration } from 'src/app/project/interfaces/subject.registration.interface';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'subject-carousel',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonicModule, SubjectCardComponent, CommonModule],
  template: `
    <div class="overflow-x-auto flex">
      <subject-card
        *ngFor="let item of items"
        [selected]="false"
        [title]="item.subject?.name || ''"
        [professor]="
          (item.student_commissions?.[0]?.commission?.professor?.last_name || '') +
          ' ' +
          (item.student_commissions?.[0]?.commission?.professor?.first_name || '')
        "
        [commission]="item.student_commissions?.[0]?.commission?.id || ''"
        [classroom]="item.student_commissions?.[0]?.commission?.classroom?.name || ' - '"
        [building]="item.student_commissions?.[0]?.commission?.classroom?.building?.name || ' - '"
      />
    </div>
    <ng-template #elseblock>
      <div class="message my-6">No hay materias disponibles</div>
    </ng-template>
  `,
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
  @Input() items!: PartialSubjectRegistration[];
  slideOpt = {
    direction: 'horizontal',
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
    },
  };
}
