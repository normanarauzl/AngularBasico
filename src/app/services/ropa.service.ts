import {Injectable} from '@angular/core'

@Injectable(

)

export class RopaService{
    public nombre_prenda = "Pantalones vaqueros"
    public coleccion_ropa = ['Pantalones Blancos', 'Camisetas rojas', 'Tenis Negros']

    prueba(nombre){
        return nombre
    }

    addRopa(nombre:string):Array<string>{
        this.coleccion_ropa.push(nombre)
        return this.getRopa()
    }

    getRopa(){
        return this.coleccion_ropa
    }

    delRopa(index:number):Array<string>{
        this.coleccion_ropa.splice(index, 1)
        return this.getRopa()
    }

}