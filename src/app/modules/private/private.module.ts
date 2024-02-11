import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import LocaleEsPe from '@angular/common/locales/es-PE';
import { registerLocaleData } from '@angular/common';
import { PrivateRoutingModule } from './private-routing.module';
import { UiTabsComponent } from 'src/app/shared/ui/ui-tabs/ui-tabs.component';
registerLocaleData(LocaleEsPe);

@NgModule({
  declarations: [],
  imports: [CommonModule, PrivateRoutingModule, UiTabsComponent],
  providers: [{ provide: LOCALE_ID, useValue: 'es-PE' }],
})
export class PrivateModule {}
