import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import {TagsComponent} from './tags/tags.component';
import {TagsResolverService} from './services/tags-resolver.service';
import {AuthenticatedUserComponent} from './authenticated-user/authenticated-user.component';
import {SignInComponent} from '../fw/users/sign-in/sign-in.component';
import {RegisterUserComponent} from '../fw/users/register-user/register-user.component';
import {AuthGuard} from '../fw/services/auth-guard.service';

export const appRoutes: Routes = [
  { path: 'signin', component: SignInComponent },
  { path: 'register', component: RegisterUserComponent },
  { path: 'authenticated', component: AuthenticatedUserComponent, canActivate: [AuthGuard],
    children: [
      { path: '', canActivateChild: [AuthGuard],
        children: [
          { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
          { path: 'dashboard', component: DashboardComponent },
          { path: 'tags', component: TagsComponent, resolve :{tags : TagsResolverService} },
          { path: 'settings', component: SettingsComponent },
        ] }
    ] },
  { path: '', component: SignInComponent },
  { path: '**', component: SignInComponent }
];
