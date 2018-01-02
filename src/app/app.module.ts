import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TuneComponent } from './tune/tune.component';
import { TunelistComponent } from './components/tunelist/tunelist.component';


@NgModule({
  declarations: [
    AppComponent,
    TuneComponent,
    TunelistComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
