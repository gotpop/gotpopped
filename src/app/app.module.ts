import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JsonpModule, HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

import { AppComponent } from './app.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { FooterComponent } from './templates/footer/footer.component';
import { HomeComponent } from './templates/home/home.component';

import { HeaderComponent } from './templates/header/header.component';
import { HeaderTitleComponent } from './templates/header/header-title/header-title.component';
import { HeaderMenuComponent } from './templates/header/header-menu/header-menu.component';
import { MenuTriggerComponent } from './templates/header/header-menu/menu-trigger/menu-trigger.component';

import { WorkComponent } from './templates/work/work.component';
import { SkillsComponent } from './templates/skills/skills.component';
import { SocialComponent } from './shared/components/social/social.component';
import { BehanceService } from './shared/services/behance.service';
import { WorkNavComponent } from './templates/work/work-nav/work-nav.component';
import { SiteComponent } from './templates/site/site.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    HeaderMenuComponent,
    MenuTriggerComponent,
    WorkComponent,
    HeaderTitleComponent,
    SkillsComponent,
    SocialComponent,
    WorkNavComponent,
    SiteComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    routes,
    JsonpModule,
    HttpModule,
    BrowserAnimationsModule
  ],
  providers: [
    BehanceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
