import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FwModule } from '../fw/fw.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {appRoutes} from './app.routing';
import { TagsComponent } from './tags/tags.component';
import {DataService} from './services/data.service';
import {TagsResolverService} from './services/tags-resolver.service';
import {HttpClientModule} from '@angular/common/http';
import {AgmCoreModule} from '@agm/core';
import {MapComponent} from './dashboard/map/map.component';
import { AuthenticatedUserComponent } from './authenticated-user/authenticated-user.component';
import {UserService} from './services/user.service';
import {UserApi} from '../fw/users/user-api';
import {AuthGuard} from '../fw/services/auth-guard.service';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SettingsComponent,
    TagsComponent,
    MapComponent,
    AuthenticatedUserComponent
  ],
  imports: [
    BrowserModule,
    FwModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAt1d6t28Sbvaa4exq2dHKOffqUCEGXoqQ'
    }),
  ],
  providers: [
    DataService,
    TagsResolverService,
    UserService,
    {provide: UserApi , useExisting: UserService},
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
