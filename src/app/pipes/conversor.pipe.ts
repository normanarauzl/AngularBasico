import {Pipe, PipeTransform} from '@angular/core'

@Pipe({name:'conversor'})

export class ConversorPipe implements PipeTransform{
    transform(a, b){
        let value_one = parseInt(a)
        let value_dos = parseInt(b)

        let result = " El resultado de multiplicar "+ value_one + " por " + value_dos+ " es: " + (value_one * value_dos)
        return result
    }
}