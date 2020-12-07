import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SeguroComponent } from './seguro/seguro.component';
import { AppAuthGuard } from './shared/auth/app.authguard';

const routes: Routes = [
  // Fallback when no prior route is matched
  {
    path: 'seguro',
    component: SeguroComponent,
    canActivate: [AppAuthGuard]
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }

];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}

