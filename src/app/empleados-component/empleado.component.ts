import {Component} from '@angular/core'
import {Empleado}  from './empleado'

@Component({
    selector:'empleado',
    templateUrl:'empleado.component.html',
    styleUrls:['empleado.component.css']
})

export class EmpleadoComponent{
    //Metodo para llamar a otros metodos, se lanza luego del constructor
    public titulo = 'Componente empleado'
    public empleado:Empleado
    public trabajadores:Array<Empleado>
    public trabajador_externo:boolean
    public color:string
    public color_seleccionado: string

    constructor(){
        this.empleado = new Empleado('Norman Arauz',28,'Programador', true)
        this.trabajadores = [
            new Empleado('Luis Chee', 23,'Programador',true),
            new Empleado('Denis Lopez', 29,'Programador',false),
            new Empleado('Norman Arauz', 28,'Programador',false),
            new Empleado('Junior Escoto', 20,'Programador',true),
        ]
        this.trabajador_externo = true
        this.color = 'green'
        this.color_seleccionado = '#CCC'
    }

    ngOnInit(){
        console.log(this.trabajadores)
    }

    cambiarExterno(valor){
        this.trabajador_externo = valor
    }

    logColorSeleccionado(){
        console.log(this.color_seleccionado)
    }
}