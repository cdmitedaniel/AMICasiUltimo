import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from 'src/app/components/employee/employee.component';
import { UserComponent } from 'src/app/components/user/user.component';
import {PersonaComponent} from 'src/app/components/persona/persona.component';
import {LeyComponent} from 'src/app/components/ley/ley.component';
import { RouterModule, Routes,PreloadAllModules } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { AdminCrudComponent } from './components/admin-crud/admin-crud.component';
import { HistorialComponent } from './components/historial/historial.component';
import { RolComponent } from './components/rol/rol.component';
import { CiudadanoComponent } from './components/ciudadano/ciudadano.component';
import { ComentarioComponent } from './components/comentario/comentario.component';
import { ArticuloComponent } from './components/articulo/articulo.component';
import { VotosComponent } from './components/votos/votos.component';
import { InteraccionComponent } from './components/interaccion/interaccion.component';
import { PublicacionleyComponent } from './components/publicacionLey/publicacionley.component';


import { InicioComponent} from 'src/app/components/inicio/inicio.component';
import { ModificarLeyComponent} from 'src/app/components/modificarLey/modificarLey.component';
import { ModificarLeyAComponent} from 'src/app/components/modificarLeyA/modificarLeyA.component';
import { CrearLeyComponent} from 'src/app/components/crearLey/crearLey.component';
import {ArchivarComponent} from 'src/app/components/archivar/archivar.component';
import {ContactanosComponent} from 'src/app/components/contactanos/contactanos.component';


import {AcercaDeComponent} from 'src/app/components/acercaDe/acercaDe.component';
import {VotarComponent} from 'src/app/components/votar/votar.component';
import { LeyesComponent } from 'src/app/components/leyes/leyes.component';
import { HistorialAsambleistaComponent } from 'src/app/components/historial-asambleista/historial-asambleista.component';

import { LeerLeyComponent } from './components/leer-ley/leer-ley.component';
import { LeyItemComponent } from './components/ley-item/ley-item.component';

const routes: Routes = [
  {path: 'admin/employees', component: EmployeeComponent},
  {path: 'admin/users', component: UserComponent },
  {path:'admin/personas', component:PersonaComponent},
  {path:'admin/login', component:LoginComponent},
  {path:'admin/admincrud', component:AdminCrudComponent},
  {path:'admin/ley', component:LeyComponent},
  {path:'admin/historial', component:HistorialComponent},
  {path:'admin/ciudadano', component:CiudadanoComponent},
  {path:'admin/rol', component:RolComponent},
  {path:'admin/interaccion', component:InteraccionComponent},
  {path:'admin/votos', component:VotosComponent},
  {path:'admin/publicacionley', component:PublicacionleyComponent},
  {path:'admin/comentarios', component:ComentarioComponent},
  {path:'admin/articulo', component:ArticuloComponent},

  {path:'admin/inicio', component:InicioComponent},
  {path:'admin/modificarLey', component:ModificarLeyComponent},
  {path:'admin/modificarLeyA', component:ModificarLeyAComponent},
  {path:'admin/archivar', component:ArchivarComponent},
  {path:'contactanos', component:ContactanosComponent},
  {path:'admin/crearLey', component:CrearLeyComponent},
  {path:'admin/acercaDe', component:AcercaDeComponent},
  {path:'admin/votar', component:VotarComponent},
  {path:'admin/leyes', component:LeyesComponent},
  {path:'admin/HistorialAsambleistaComponent', component:HistorialAsambleistaComponent},

  {path:'admin/leerLey', component:LeerLeyComponent},
  {path:'admin/LeyItem', component:LeyItemComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }