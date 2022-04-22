import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProjetsComponent } from './projets/projets.component';
import { YouloopComponent } from './projets/youloop/youloop.component';
import { Error404Component } from './error404/error404.component';
import { QuiSuisJeComponent } from './qui-suis-je/qui-suis-je.component';
import { PokemonComponent } from './projets/pokemon/pokemon.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProjetsComponent,
    YouloopComponent,
    Error404Component,
    QuiSuisJeComponent,
    PokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
