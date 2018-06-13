import {Component} from '@angular/core'
import {Router, ActivatedRoute, Params} from '@angular/router'

@Component({
    selector:'contacto',
    templateUrl:'contacto.component.html'
})

export class ContactoComponent{
    public title = "Pagina de Contacto"
    public parametro

    constructor(
        private _route: ActivatedRoute,
        private _router: Router
    ){}

    Redirigir(){
        this._router.navigate(['/contacto','netman.arauz'])
    }

    Principal(){
        this._router.navigate(['/home'])
    }

    ngOnInit(){
        this._route.params.forEach((params: Params) => {
            this.parametro = params['page']
        })
    }
}