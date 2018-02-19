import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkItemComponent } from './work-item/work-item.component';
import { LandingComponent } from '../../portfolio/landing/landing.component';
import { PortfolioComponent } from './portfolio.component';

const routes: Routes = [
  { path: 'work', redirectTo: 'work/columbus', pathMatch: 'full' },
  {
    path: 'work', component: PortfolioComponent,
    children: [
      { path: 'columbus', component: WorkItemComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule { }
