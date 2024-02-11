import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CareerProfileRoutingModule } from './career-profile-routing.module';
import { CareerProfileComponent } from './career-profile.component';
import { IonicModule } from '@ionic/angular';
import { TabCardComponent } from 'src/app/shared/cards/tab-card/tab-card.component';
import { SubjectCardComponent } from 'src/app/shared/cards/subject-card/subject-card.component';
import { UiCardComponent } from 'src/app/shared/ui/ui-card/ui-card.component';
import { LinkButtonComponent } from 'src/app/shared/link-button/link-button.component';
import LocaleEsPe from '@angular/common/locales/es-PE';
import { registerLocaleData } from '@angular/common';
registerLocaleData(LocaleEsPe);

@NgModule({
  declarations: [CareerProfileComponent],
  imports: [
    CommonModule,
    CareerProfileRoutingModule,
    IonicModule,
    TabCardComponent,
    SubjectCardComponent,
    UiCardComponent,
    LinkButtonComponent,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es-PE' }],
})
export class CareerProfileModule {}
