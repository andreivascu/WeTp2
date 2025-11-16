import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MyComponent } from './my-component/my-component';
import { IdInput } from './id-input/id-input';
import { FormsModule } from '@angular/forms';
import { FilterPokemonPipePipe } from './filter-pokemon--pipe-pipe';
import { Pokedex } from './pokedex';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Pokedetail } from './pokedetail/pokedetail';

// Ajout PrimeNG et animations
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { PrimeButtonDemo } from './prime-button-demo';
import { ButtonModule } from 'primeng/button';
import { PokeCard } from './poke-card';
import { CardModule } from 'primeng/card';




@NgModule({
  declarations: [
    App,
    IdInput,
    MyComponent,
    FilterPokemonPipePipe,
    Pokedetail,
    PrimeButtonDemo,
    PokeCard
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    ButtonModule,
    CardModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    Pokedex,
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset:Aura
      }
    })
  ],
  bootstrap: [App]
})
export class AppModule { }
