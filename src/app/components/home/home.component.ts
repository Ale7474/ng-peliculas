import { Component } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})

export class HomeComponent {

  populares:any;
  cartelera:any;
  favoritosNinios:any;

  constructor(private peliculasService: PeliculasService, private router:Router) {

    //obtenemos la información de las películas desde el servicio.
     this.peliculasService.getPopulares()
                         .subscribe( data => this.populares = data );

     this.peliculasService.getCartelera()
                          .subscribe( data => this.cartelera = data );

     this.peliculasService.getFavoritosNinios()
                          .subscribe( data => this.favoritosNinios = data );

  }

  mostrarDetalle(pelicula) {
    this.router.navigate(['/pelicula',pelicula.id]);

  }



}
