import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { TagsPageComponent } from './pages/tags-page/tags-page.component';

console.log('Admin module is loaded...');

@NgModule({
  declarations: [
    TagsPageComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
