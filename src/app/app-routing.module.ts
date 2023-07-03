import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AccueilComponent } from './accueil/accueil.component';
import { PagenotfoundComponentComponent } from './pagenotfound-component/pagenotfound-component.component';
import { NewsComponent } from './news/news.component';
import { RechercheComponent } from './recherche/recherche.component';

const routes: Routes = [
  {
    path : "about", component: AboutComponent,
    children : [
      {path : "news", component: NewsComponent}, 
  {path : "recherche", component: RechercheComponent}]

  } ,


  {path : "contact", component: ContactComponent},
  {path : "accueil", component: AccueilComponent},

  

 

  

  { path: '', redirectTo: '/accueil', pathMatch: 'full' },

  
  { path: '**', component: PagenotfoundComponentComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
