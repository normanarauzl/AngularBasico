import {Component} from '@angular/core'

@Component({
    selector:'plantillas',
    templateUrl: 'plantillas.component.html'
})

export class PlantillasComponent{
    public titulo
    public administrador

    constructor(){
        this.titulo = 'Plantillas ngTemplate Angular'
        this.administrador = true
    }

    public Cambiar(){
        if (!this.administrador){
            this.administrador = true
        }
        else this.administrador = false
    }
}