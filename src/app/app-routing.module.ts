import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'asistencia',
    loadChildren: () => import('./asistencia/asistencia.module').then( m => m.AsistenciaPageModule)
  },
  {
    path: 'edi-horario',
    loadChildren: () => import('./edi-horario/edi-horario.module').then( m => m.EdiHorarioPageModule)
  },
  {
    path: 'gen-qr',
    loadChildren: () => import('./gen-qr/gen-qr.module').then( m => m.GenQRPageModule)
  },
  {
    path: 'horario',
    loadChildren: () => import('./horario/horario.module').then( m => m.HorarioPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'registrar',
    loadChildren: () => import('./registrar/registrar.module').then( m => m.RegistrarPageModule)
  },
  {
    path: 'menuu',
    loadChildren: () => import('./menuu/menuu.module').then( m => m.MenuuPageModule)
  },
  {
    path: 'olvidecontra',
    loadChildren: () => import('./olvidecontra/olvidecontra.module').then( m => m.OlvidecontraPageModule)
  },
  {
    path: 'asistencia-e',
    loadChildren: () => import('./asistencia-e/asistencia-e.module').then( m => m.AsistenciaEPageModule)
  },
  {
    path: 'scanner',
    loadChildren: () => import('./scanner/scanner.module').then( m => m.ScannerPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
