import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

// Components
import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { UserComponent } from './components/user/user.component';
import { PersonaComponent } from './components/persona/persona.component';
import { LeyComponent } from './components/ley/ley.component';
import { HistorialComponent } from './components/historial/historial.component';
import { CiudadanoComponent } from './components/ciudadano/ciudadano.component';
import { RolComponent } from './components/rol/rol.component';
import { InteraccionComponent } from './components/interaccion/interaccion.component';
import { LoginComponent } from './components/auth/login/login.component';
import { AdminCrudComponent } from './components/admin-crud/admin-crud.component';
import { VotosComponent } from './components/votos/votos.component';
import { PublicacionleyComponent } from './components/publicacionLey/publicacionley.component';
import { ComentarioComponent } from './components/comentario/comentario.component';
import { ArticuloComponent } from './components/articulo/articulo.component';

//Pag Inicio
import { InicioComponent } from './components/inicio/inicio.component';
import { ModificarLeyComponent } from './components/modificarLey/modificarLey.component';
import { CrearLeyComponent } from './components/crearLey/crearLey.component';
import { ModificarLeyAComponent } from './components/modificarLeyA/modificarLeyA.component';
import { ArchivarComponent } from './components/archivar/archivar.component';
import { ContactanosComponent } from './components/contactanos/contactanos.component';
import { AcercaDeComponent } from './components/acercaDe/acercaDe.component';
import { VotarComponent } from './components/votar/votar.component';
import { LeyesComponent } from './components/leyes/leyes.component';
import { HistorialAsambleistaComponent } from './components/historial-asambleista/historial-asambleista.component';
import { LeerLeyComponent } from './components/leer-ley/leer-ley.component';
import { LeyItemComponent } from './components/ley-item/ley-item.component';
//Pag Fin

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    UserComponent,
    PersonaComponent,  
    LeyComponent, 
    HistorialComponent, 
    CiudadanoComponent,
    LoginComponent, 
    AdminCrudComponent,
     RolComponent, 
     InteraccionComponent, 
     VotosComponent, 
     PublicacionleyComponent, 
     ComentarioComponent, 
     ArticuloComponent,

     InicioComponent,
     ModificarLeyComponent,
     CrearLeyComponent,
     ModificarLeyAComponent,
     ArchivarComponent,
     ContactanosComponent,
     AcercaDeComponent,
     VotarComponent,
     LeyesComponent,
     HistorialAsambleistaComponent,
     LeyItemComponent,
     LeerLeyComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'admin/employees',
        component:EmployeeComponent
      },
      {
        path: 'admin/users',
        component:UserComponent
      },
      {
        path: 'admin/personas',
        component:PersonaComponent
      }, 
      {
        path: 'admin/ley',
        component:LeyComponent
      },
      {
        path: 'admin/historial',
        component:HistorialComponent
      },
      {
        path: 'admin/ciudadano',
        component:CiudadanoComponent
      },
      {
        path: 'admin/rol',
        component:RolComponent
      },
      {
        path: 'admin/interaccion',
        component:InteraccionComponent
      },
      {
        path: 'admin/login',
        component:LoginComponent
      }, 
      {
        path: 'admin/admincrud',
        component:AdminCrudComponent
      }, 
      {
        path: 'admin/votos',
        component:VotosComponent
      },  
      {
        path: 'admin/publicacionley',
        component:PublicacionleyComponent
      }, 
      {
        path: 'admin/comentarios',
        component:ComentarioComponent
      }, 
      {
        path: 'admin/articulo',
        component:ArticuloComponent
      }, 
      {
        path: 'admin/crearLey',
        component:CrearLeyComponent
      },  
      {
        path: 'admin/modificarLey',
        component:ModificarLeyComponent
      },  
      {
        path: 'admin/modificarLeyA',
        component:ModificarLeyAComponent
      },  
      {
        path: 'admin/archivar',
        component:ArchivarComponent
      },   
      {
        path: 'contactanos',
        component:ContactanosComponent
      },
      {
        path: 'admin/acercaDe',
        component:AcercaDeComponent
      },             
      {
        path: 'admin/votar',
        component:VotarComponent
      },  
      {
        path: 'admin/leyes',
        component:LeyesComponent
      },
      {
        path: 'admin/historial-asambleista',
        component:HistorialAsambleistaComponent
      },  
      {
        path: 'admin/inicio',
        component:InicioComponent
      },  

      {
        path: 'admin/leerLey/:id',
        component:LeerLeyComponent 
      },
      {
        path: 'admin/leyItem',
        component:LeyItemComponent
      }

    ])    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
