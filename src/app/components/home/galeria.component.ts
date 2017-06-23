import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styles: []
})
export class GaleriaComponent implements OnInit {

  //con el @Input puedo recibir información enviada desde otro componente, en este caso enviamos información de
  //películas y título desde el home.component.html

  @Input('peliculas') peliculas;
  @Input('titulo') titulo;

  constructor() { }

  ngOnInit() {
  }

}
