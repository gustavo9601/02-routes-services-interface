import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {HeroesComponent} from './components/heroes/heroes.component';
import {HeroeComponent} from './components/heroe/heroe.component';
import {BuscadorComponent} from './components/buscador/buscador.component';

const APP_ROUTES:Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'heroes', component: HeroesComponent},
  {path: 'heroe/:id', component: HeroeComponent}, //id siginifica que rcibira id
  {path: 'buscar/:termino', component: BuscadorComponent}, //terminimo siginifica que rcibira id
  {path: '**', pathMatch: 'full', redirectTo: 'home'} // se redureccionara si no existe
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});
