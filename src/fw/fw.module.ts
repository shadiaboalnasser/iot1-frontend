import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrameworkBodyComponent } from './framework-body/framework-body.component';
import { ContentComponent } from './content/content.component';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { FrameworkConfigService } from './services/framework-config.service';
import { TopBarComponent } from './top-bar/top-bar.component';
import {StatusBarComponent} from './status-bar/status-bar.component';
import {ScreenService} from './services/screen.service';
import {MenuService} from './services/menu.service';
import {MenuComponent} from './menus/menu/menu.component';
import {MenuItemComponent} from './menus/menu-item/menu-item.component';
import {RouterModule} from '@angular/router';
import {SignInComponent} from './users/sign-in/sign-in.component';
import {FormsModule} from '@angular/forms';
import {RegisterUserComponent} from './users/register-user/register-user.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [
    FrameworkBodyComponent,
    ContentComponent,
    TitleBarComponent,
    TopBarComponent,
    StatusBarComponent,
    MenuComponent,
    MenuItemComponent,
    SignInComponent,
    RegisterUserComponent
  ],
  providers: [
    FrameworkConfigService,
    ScreenService,
    MenuService
  ],
  exports: [
    FrameworkBodyComponent,
  ]

})
export class FwModule { }
