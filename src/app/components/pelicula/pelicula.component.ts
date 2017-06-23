import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styles: []
})
export class PeliculaComponent implements OnInit {

  pelicula:any;
  regresarA:string = "";
  busqueda:string = "";

  constructor( private peliculasService:PeliculasService, private activatedRoute:ActivatedRoute ) {
    this.activatedRoute.params.subscribe( parametros => {
      console.log(parametros);
      this.regresarA = parametros['pag'];
      console.log(this.regresarA);
      if (parametros['busqueda']){
        this.busqueda = parametros['busqueda'];
      }
      this.peliculasService.getPelicula(parametros['id'])
                           .subscribe( data => this.pelicula = data);
    })
  }

  ngOnInit() {
  }

}
