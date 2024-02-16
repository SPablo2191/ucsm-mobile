import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { IonicModule } from '@ionic/angular';
import { UiImgComponent } from 'src/app/shared/ui/ui-img/ui-img.component';
import { CardContainerComponent } from 'src/app/shared/card-container/card-container.component';
import { PersonItemComponent } from 'src/app/shared/person-item/person-item.component';

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    IonicModule,
    UiImgComponent,
    CardContainerComponent,
    PersonItemComponent,
  ],
})
export class ProfileModule {}
