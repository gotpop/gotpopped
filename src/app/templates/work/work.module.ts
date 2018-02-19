import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkRoutingModule } from './work-routing.module';
import { WorkComponent } from './work.component';
import { WorkItemComponent } from './work-item/work-item.component';
import { WorkNavComponent } from './work-nav/work-nav.component';

@NgModule({
  imports: [
    CommonModule,
    WorkRoutingModule
  ],
  declarations: [
    WorkItemComponent,
    WorkNavComponent
  ],
  exports: [
    WorkNavComponent
  ]
})
export class WorkModule { }
