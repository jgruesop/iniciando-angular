import { Component } from '@angular/core';


@Component ({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})

export class HeroeComponent {
    nombre: string = 'Ironmam';
    edad  : number = 35;

    get nombreCapitalizado() {
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string {
        return  `${this.nombre} - ${this.edad}`;
        //El return de ariba es equivalente a 
        //return this.nombre + " " + this.edad;
    }

    cambiarNombre(): void {
        this.nombre = 'Spiderman';
    }

    cambiarEdad(): void {
        this.edad = 53;
    }
}