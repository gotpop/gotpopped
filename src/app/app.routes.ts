import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { SkillsComponent } from "./skills/skills.component";

export const router: Routes = [
    { path: '', component: HomeComponent },
    { path: 'work', component: PortfolioComponent },
    { path: 'skills', component: SkillsComponent }
]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);