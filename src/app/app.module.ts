import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { routes } from './app.routes';

import { AppComponent } from './app.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { FooterComponent } from './templates/footer/footer.component';
import { HeaderComponent } from './templates/header/header.component';
import { HomeComponent } from './templates/home/home.component';
import { MenuComponent } from './templates/header/menu/menu.component';
import { MenuTriggerComponent } from './templates/header/menu-trigger/menu-trigger.component';
import { PortfolioComponent } from './templates/portfolio/portfolio.component';
import { SiteTitleComponent } from './templates/header/site-title/site-title.component';
import { SkillsComponent } from './templates/skills/skills.component';
import { SocialComponent } from './shared/components/social/social.component';
import { PortfolioModule } from './templates/portfolio/portfolio.module';
import { LandingComponent } from './portfolio/landing/landing.component';


@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    MenuComponent,
    MenuTriggerComponent,
    PortfolioComponent,
    SiteTitleComponent,
    SkillsComponent,
    SocialComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    routes,
    PortfolioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
