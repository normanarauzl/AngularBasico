import {Component}          from '@angular/core'
import {Coche}              from './coches'
import {PeticionesService}  from '../services/peticiones.service'

@Component({
    selector: 'coches',
    templateUrl: 'coches.component.html',
    providers:[PeticionesService]
})

export class CochesComponent{
    public coche:Coche
    public coches:Array<Coche>
    public articulos

    constructor(
        private _peticionesServices:PeticionesService
    ){
        this.coche = new Coche("","","")
        this.coches = [
            new Coche("nisan","12","rojo"),
            new Coche("toyota","15","azul"),
            new Coche("sedan","13","negro"),
            new Coche("bmw","11","verde"),
            new Coche("mazda","20","rosado"),
            new Coche("izusu","21","amarillo"),
            new Coche("chevrolet","25","blanco"),
        ]
    }

    ngOnInit(){
        this._peticionesServices.getArticulos().subscribe(
            result => {
                this.articulos = result
                
                if (!this.articulos){
                    console.log('Error en el servidor')
                }
                console.log(result)
            },
            error => {
                var errorMessage = <any>error
                console.log(errorMessage)
            }
        )
    }

    onSubmit(){
        this.coches.push(this.coche)
    }
}