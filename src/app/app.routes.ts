import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './templates/home/home.component';
import { WorkComponent } from './templates/work/work.component';
import { WorkItemComponent } from './templates/work/work-item/work-item.component';
import { SkillsComponent } from './templates/skills/skills.component';

export const router: Routes = [
  { path: '', component: HomeComponent },
  { path: 'work/:id', component: WorkItemComponent },
  { path: 'skills', component: SkillsComponent },
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
