import {Injectable} from '@angular/core'
import {Http, Response, Headers} from '@angular/http'
import 'rxjs/add/operator/map'
import {Observable} from 'rxjs/Observable'

@Injectable()

export class PeticionesService{

    public url:string

    constructor(private _http:Http){
        this.url = 'https://jsonplaceholder.typicode.com/posts'
    }
    getPrueba(){
        return "Hola desde el servicio peticiones"
    }

    getArticulos(){
        //Devuelve una coleccion jscript
        return this._http.request(this.url)
        .map(res => res.json())
    }
}