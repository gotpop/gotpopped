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
import { MenuTriggerComponent } from './templates/header/menu/menu-trigger/menu-trigger.component';
import { WorkComponent } from './templates/work/work.component';
import { SiteTitleComponent } from './templates/header/site-title/site-title.component';
import { SkillsComponent } from './templates/skills/skills.component';
import { SocialComponent } from './shared/components/social/social.component';
import { BehanceService } from './shared/services/behance.service';
import { JsonpModule, HttpModule } from '@angular/http';
import { WorkItemComponent } from './templates/work/work-item/work-item.component';
import { WorkNavComponent } from './templates/work/work-nav/work-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    MenuComponent,
    MenuTriggerComponent,
    WorkComponent,
    SiteTitleComponent,
    SkillsComponent,
    SocialComponent,
    WorkItemComponent,
    WorkNavComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    routes,
    JsonpModule,
    HttpModule
  ],
  providers: [
    BehanceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
