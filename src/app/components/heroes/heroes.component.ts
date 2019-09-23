import {Component, OnInit} from '@angular/core';
//Imporntao el router de las rutas
import {Router} from '@angular/router';

//importando el servicio
import {HeroesService, Heroe} from './../../servicios/heroes.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = [];

  //creamos un objeto de tipo del Servicio
  constructor(private _heroesService:HeroesService,
              private _router:Router) {

  }


  ngOnInit() {

    this.heroes = this._heroesService.getHeroes();
    console.log(this.heroes);
  }


  verHeroe(i:number) {
    console.log("id del heroe " + i);
    //Le especifcamos los parametros de la url
    this._router.navigate(['/heroe', i]);
  }

}
