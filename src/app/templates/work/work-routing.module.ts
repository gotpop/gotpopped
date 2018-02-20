import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkItemComponent } from './work-item/work-item.component';
import { WorkComponent } from './work.component';

const routes: Routes = [
  { path: 'work', redirectTo: 'work/columbus', pathMatch: 'full' },
  {
    path: 'work', component: WorkComponent,
    children: [
      { path: 'columbus', component: WorkItemComponent },
      { path: 'hackett', component: WorkItemComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkRoutingModule { }
