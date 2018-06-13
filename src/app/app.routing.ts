//Necesarias para las rutas de navegacion
import { ModuleWithProviders }      from '@angular/core'
import {Routes, RouterModule}       from '@angular/router'

//Importar componentes
import {EmpleadoComponent }         from './empleados-component/empleado.component'
import {FrutaComponent}             from './fruta-component/fruta.component'
import {HomeComponent}              from './home/home.component'
import {ContactoComponent}          from './contacto/contacto.component'
import {CochesComponent}            from './coches/coches.component'
import {PlantillasComponent}        from './plantillas/plantillas.component'

//Lista de rutas
const appRoutes: Routes = [
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'empleado',
        component:EmpleadoComponent
    },
    {
        path:'fruta',
        component:FrutaComponent
    },
    {
        path:'contacto',
        component:ContactoComponent
    },
    {
        path:'contacto/:page',
        component:ContactoComponent
    },
    {
        path:'coches',
        component:CochesComponent
    },
    {
        path:'plantillas',
        component:PlantillasComponent
    },
]

export const appRoutintgProviders: any[] = []
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes)