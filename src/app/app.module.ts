import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { TunelistComponent } from './components/tunelist/tunelist.component';

import { TuneReducer } from './store/tune/tune.reducer';
import { TunelistItemComponent } from './components/tunelist-item/tunelist-item.component';


@NgModule({
  declarations: [
    AppComponent,
    TunelistComponent,
    TunelistItemComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({tunes: TuneReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
