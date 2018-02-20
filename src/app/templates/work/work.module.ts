import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkComponent } from './work.component';
import { WorkItemComponent } from './work-item/work-item.component';
import { WorkNavComponent } from './work-nav/work-nav.component';

@NgModule({
  imports: [
    CommonModule
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
