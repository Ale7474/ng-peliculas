import { Injectable } from '@angular/core';
import { Jsonp, Http } from '@angular/http'
import 'rxjs/Rx';

@Injectable()
export class PeliculasService {

  private apiKey:string = "fa39fc0f7edecef94801ea72a9f9b336";
  private urlMoviedb:string = "https://api.themoviedb.org/3";

  peliculas:any[] = [];


  constructor( private jsonp:Jsonp, private http:Http ) {  }

  getCartelera() {
    let desde = new Date();
    let hasta = new Date();
    //sumamos 7 días a la fecha actual
    hasta.setDate(hasta.getDate() + 7);

    let desdeStr = `${desde.getFullYear()}-${desde.getMonth()+1}-${desde.getDate()}`;
    let hastaStr = `${hasta.getFullYear()}-${hasta.getMonth()+1}-${hasta.getDate()}`;

    let url:string = `${ this.urlMoviedb }/discover/movie?primary_release_date.gte=${desdeStr}&primary_release_date.lte=${hastaStr}&api_key=${ this.apiKey }&language=es&callback=JSONP_CALLBACK`

    return this.jsonp.get(url)
                    .map( (res) => res.json().results );
  }

  getFavoritosNinios(){
    let url:string = `${ this.urlMoviedb }/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${ this.apiKey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url)
                    .map( (res) => res.json().results );
  }

  getPopulares() {
    let url:string = `${ this.urlMoviedb }/discover/movie/?sort_by=popularity.desc&api_key=${ this.apiKey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url)
                    .map( (res) => res.json().results );
  }

  buscarPelicula(texto:string) {

    let url:string = `${ this.urlMoviedb }/search/movie/?query=${ texto }&api_key=${ this.apiKey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url)
                    .map( (res) => {
                      this.peliculas = res.json().results;
                      return res.json().results
                    });

  }

  getPelicula(id:string) {
    let url:string = `${ this.urlMoviedb }/movie/${id}?api_key=${ this.apiKey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url)
                    .map( (res) => res.json() );
  }
}
