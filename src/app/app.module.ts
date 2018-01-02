import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { TuneComponent } from './components/tune/tune.component';
import { TunelistComponent } from './components/tunelist/tunelist.component';

import { TuneReducer } from './store/tune/tune.reducer';


@NgModule({
  declarations: [
    AppComponent,
    TuneComponent,
    TunelistComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({tunes: TuneReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
