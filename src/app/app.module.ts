import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { routes } from "./app.routes";

import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { MenuTriggerComponent } from './menu-trigger/menu-trigger.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SiteTitleComponent } from './site-title/site-title.component';
import { SkillsComponent } from './skills/skills.component';
import { SocialComponent } from './social/social.component';


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
    SocialComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
