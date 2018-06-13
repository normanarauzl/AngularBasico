import { BrowserModule }                 from '@angular/platform-browser'
import { NgModule }                      from '@angular/core'
import { FormsModule}                    from '@angular/forms'
import { HttpModule }                    from '@angular/http'
import { routing, appRoutintgProviders } from './app.routing'

import { AppComponent }                  from './app.component'
import {EmpleadoComponent}               from './empleados-component/empleado.component'
import {FrutaComponent}                  from './fruta-component/fruta.component'
import {HomeComponent}                   from './home/home.component'
import {ContactoComponent}               from './contacto/contacto.component'
import {ConversorPipe}                   from '../app/pipes/conversor.pipe'
import {CochesComponent}                 from './coches/coches.component'
import {PlantillasComponent}             from './plantillas/plantillas.component'


@NgModule({
  //Los componentes que voy a usar
  declarations: [
    AppComponent,
    FrutaComponent,
    EmpleadoComponent,
    HomeComponent,
    ContactoComponent,
    ConversorPipe,
    CochesComponent,
    PlantillasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    appRoutintgProviders,
  ],
  //Servicio que hace que se mande a una ruta
  providers: [appRoutintgProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
