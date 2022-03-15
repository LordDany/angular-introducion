import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes: string[] = ['Rafaelo', 'Splinter', 'Donatelo', 'Miguel angel'];
  heroeBorrado: string = '';

  BorraHeroe(): void{
    this.heroeBorrado = (this.heroes.shift() || '');
    
  }

}
