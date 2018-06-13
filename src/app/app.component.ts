import { Component } from '@angular/core';


//Decorador: Son metadatos con los que funciona la aplicacion
@Component({
  selector: 'app-root',                // Nombre de la etiqueta componente
  templateUrl: './app.component.html', // Nombre de la plantilla html con la que voy a mostrar el componente
  styleUrls: ['./app.component.css']   // Estilos para la plantilla del componente
})

//Esta clase es un componente
export class AppComponent {
  title = 'app';
}
