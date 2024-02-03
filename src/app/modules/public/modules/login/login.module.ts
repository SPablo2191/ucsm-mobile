import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LoginComponent } from './login.component';
import { UiInputComponent } from 'src/app/shared/ui/ui-input/ui-input.component';
import { CardContainerComponent } from 'src/app/shared/card-container/card-container.component';
import { UiPasswordComponent } from 'src/app/shared/ui/ui-password/ui-password.component';
import { UiImgComponent } from 'src/app/shared/ui/ui-img/ui-img.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    UiInputComponent,
    CardContainerComponent,
    UiPasswordComponent,
    UiImgComponent,
  ],
})
export class LoginModule {}
