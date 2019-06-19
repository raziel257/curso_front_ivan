import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/* import {HomeComponent} from './home/home.component';
import {TareasComponent} from './tareas/tareas.component';
import {ContactosComponent} from './contactos/contactos.component';
import {LibrosComponent} from './libros/libros.component'; */


const routes: Routes = [
  /* { path: 'home', component: HomeComponent }, */
  { path: 'home', loadChildren: './home/home.module#HomeModule' },
  { path: 'tareas', loadChildren: './tareas/tareas.module#TareasModule' },
  { path: 'contactos', loadChildren: './contactos/contactos.module#ContactosModule' },
  { path: 'libros', loadChildren: './libros/libros.module#LibrosModule' },
  /* { path: 'tareas', component: TareasComponent },
  { path: 'contactos', component: ContactosComponent },
  { path: 'libros', component: LibrosComponent },*/
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
