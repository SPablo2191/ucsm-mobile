import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { UiTabsComponent } from 'src/app/shared/ui/ui-tabs/ui-tabs.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, PrivateRoutingModule, UiTabsComponent],
})
export class PrivateModule {}
