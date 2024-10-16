import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.component').then((c) => c.LoginComponent),
    // canActivate: [AuthGuard],
  },
  {
    path: 'on-boarding',
    loadComponent: () =>
      import('./pages/onboard/onboard.component').then(
        (c) => c.OnboardComponent
      ),
    //canActivate: [AuthGuard],
  },
  {
    path: 'community',
    loadComponent: () =>
      import('./pages/community/community.component').then(
        (c) => c.CommunityComponent
      ),
    //canActivate: [AuthGuard],
  },
  {
    path: 'gemini',
    loadComponent: () =>
      import('./pages/Gemini/gemini.component').then((c) => c.GeminiComponent),
    // canActivate: [AuthGuard],
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.component').then((c) => c.HomeComponent),
    // canActivate: [AuthGuard],
  },

  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
