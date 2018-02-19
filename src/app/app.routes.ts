import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './templates/home/home.component';
import { WorkComponent } from './templates/work/work.component';
import { SkillsComponent } from './templates/skills/skills.component';

export const router: Routes = [
    { path: '', component: HomeComponent },
    { path: 'work', component: WorkComponent },
    { path: 'skills', component: SkillsComponent },
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
