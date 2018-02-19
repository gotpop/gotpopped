import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './portfolio.component';
import { WorkItemComponent } from './work-item/work-item.component';
import { WorkNavComponent } from './work-nav/work-nav.component';

@NgModule({
  imports: [
    CommonModule,
    PortfolioRoutingModule
  ],
  declarations: [
    WorkItemComponent,
    WorkNavComponent
  ],
  exports: [
    WorkNavComponent
  ]
})
export class PortfolioModule { }
