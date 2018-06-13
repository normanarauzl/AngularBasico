import {Component} from '@angular/core'
import {RopaService} from '../services/ropa.service'


@Component({
    selector:'home',
    templateUrl:'home.component.html',
    providers:[RopaService]
})

export class HomeComponent{
    public title = "Pagina principal"
    public listado_ropa : Array<string>
    public prenda_guardar:string
    public fecha
    public nombre = "JUAN LOPEZ MARTINEZ"

    constructor(
        private _ropaService : RopaService
    ){
        this.fecha = new Date(2017,4,2)
    }

    ngOnInit(){
        this.listado_ropa = this._ropaService.getRopa()
        console.log(this.listado_ropa)
    }

    GuardarPrenda(){
        this._ropaService.addRopa(this.prenda_guardar)
        this.prenda_guardar = null
    }

    EliminarPrenda(index:number){
        this._ropaService.delRopa(index)
    }

}