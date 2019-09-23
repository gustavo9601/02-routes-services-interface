import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';

//añadimos el servicios de busqueda
import {HeroesService} from '../../servicios/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  heroes:any[] = [];
  termino:string;

  constructor(private _activatedRoute:ActivatedRoute,
              private  _heroesService:HeroesService,
              private _router:Router) {

  }

  ngOnInit() {
    //accdemos a los paraemtros que recibimos un la url
    this._activatedRoute.params.subscribe(params => {
      console.log(params['termino']);

      this.termino = params['termino'];

      this.heroes = this._heroesService.buscarHeroes(
        params['termino']
      );


      console.log(this.heroes);

    });

  }

  verHeroe(i:number) {
    console.log("id del heroe " + i);
    //Le especifcamos los parametros de la url
    this._router.navigate(['/heroe', i]);
  }


}
