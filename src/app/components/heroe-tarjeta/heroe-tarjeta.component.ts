import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html'
})
export class HeroeTarjetaComponent implements OnInit {



  //Injectamos el decarador Input que permite, indicar que el parametro viene de afuera de otro componente
  //de esta forma desde el componete html, podemos enviarle informacion del padre al hijo
  @Input() heroe:any = {};
  @Input() index:number;


  //Injectamos el decorador Output, que permitira pasar parametros del hijo al padre o reutilizar cosas
  // EventEmitter<> le indicamos que tipo de parametro va a emitir
  @Output() heroeSeleccionado:EventEmitter<number>;

  constructor(private _router:Router) {
    //Inicializamos el evento personalizado
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit() {
  }


  verHeroe() {
      console.log("Indice " + this.index);

     //usamos el Router para redireccionar con esta funcion
     this._router.navigate(['/heroe', this.index]);

  }

}
