import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'  
})

export class ListadoComponent {
  
  heroes: string[] = ['Goku','Vegueta','Krilin','Gohan','Picoro','Bulma','Maestro Roshi'];
  
  heroeBorrado: string = "" ;

  valor: number = 0;

  eliminar(): void{    
    //Como el resultado puede ser undefined, se pone la condición que también puede ser vacio      
    this.heroeBorrado = this.heroes.pop() || '';  
    this.valor = this.heroeBorrado.length;
    console.log('Eliminando...', this.heroeBorrado);    
    //La función pop() elimina el último elemento del Arreglo (JavaScript) 
    //La función shift() Elimina el primer elemento del Arreglo (JavaScript)
  } 
}
