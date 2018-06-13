import {Component} from '@angular/core'

@Component({
    selector:'fruta',
    templateUrl: 'fruta.component.html',
})

export class FrutaComponent{
    public nombre_componente:string
    public lista:string

    constructor(){
        this.nombre_componente = "Componente de fruta"
        this.lista = "Mi lista de frutas"
    }
}