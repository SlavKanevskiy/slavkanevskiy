import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {State} from "./state";
import {Actions} from "./actions";
import {FilterMarkersRightList} from "./directives";

@NgModule({
  declarations: [
    AppComponent,
    FilterMarkersRightList
  ],
  imports: [
    BrowserModule
  ],
  providers: [State, Actions],
  bootstrap: [AppComponent]
})
export class AppModule { }
