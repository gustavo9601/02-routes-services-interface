import {Component, OnInit} from '@angular/core';
//Importamos el modulo para poder recibir parametros por la URL
import {ActivatedRoute} from '@angular/router';

//importamos el servicio
import {} from './../../servicios/heroes.service';
import {HeroesService} from "src/app/servicios/heroes.service";

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  heroe:any = {};


  constructor(private _activateRoute:ActivatedRoute,
              private _heroesService:HeroesService) {

    /*
     * Creamos un objeto para poder accder a los parametros que envien por URL
     * nos suscribimos con el observador subscribe
     * Creamos la variable params en formato funcion la cual retornara los parametros
     * */
    this._activateRoute.params.subscribe(params => {
      console.log(params); //todos los parametros
      console.log(params['id']); // solo el id, que colocamos en el archivo de rutas

      //Le asignamos a la variable de tipo objeto, lo que nos devuelve la funcion del servicio pasandole el id como parametro
      this.heroe = this._heroesService.getHeroe(params['id']);

      console.log(this.heroe);
    });
  }

}
