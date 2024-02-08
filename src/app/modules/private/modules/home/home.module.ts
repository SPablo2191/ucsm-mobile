import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CardContainerComponent } from 'src/app/shared/card-container/card-container.component';
import { UiImgComponent } from 'src/app/shared/ui/ui-img/ui-img.component';
import { IonicModule } from '@ionic/angular';
import { CareerCardComponent } from 'src/app/shared/career-card/career-card.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, CardContainerComponent, UiImgComponent, IonicModule, CareerCardComponent],
})
export class HomeModule {}
