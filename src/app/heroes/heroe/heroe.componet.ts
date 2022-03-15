import { Component } from '@angular/core';

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html',
})
export class HeroeComponent {
    nombre: string = 'Aigronman';
    edad: number = 45;

    get nombreCapitalizado(): string{
        //get sirve para modificar las propiedades internas y que por lo general son privadas
        return this.nombre.toUpperCase();
    }

    //------MÉTODOS------
    obtenerNombre():string{
        return this.nombre + '-' + this.edad.toString();
    }

    cambiarNombre():void{
        this.nombre = 'Spiderman';
    }

    cambiarEdad():void{
        this.edad = 16;
        
    }
}