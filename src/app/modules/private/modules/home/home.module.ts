import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CardContainerComponent } from 'src/app/shared/card-container/card-container.component';
import { UiImgComponent } from 'src/app/shared/ui/ui-img/ui-img.component';
import { IonicModule } from '@ionic/angular';
import { CareerCardComponent } from 'src/app/shared/cards/career-card/career-card.component';
import { EventCardComponent } from 'src/app/shared/cards/event-card/event-card.component';
import { CapitalizePipe } from 'src/app/core/capitalize.pipe';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CardContainerComponent,
    UiImgComponent,
    IonicModule,
    CareerCardComponent,
    EventCardComponent,
    CapitalizePipe,
  ],
})
export class HomeModule {}
