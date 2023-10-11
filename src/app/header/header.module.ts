import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from "@ngrx/store";
import {headerReducer, messageFeatureKeyHeader} from "./state-header/header-page.reducer";
import {Actions, EffectsModule} from "@ngrx/effects";
import {HeaderPageEffect} from "./state-header/header-page.effect";
import {AppService} from "../app.service";
import {Subscription} from "rxjs";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(
      messageFeatureKeyHeader,
      headerReducer,
    ),
    EffectsModule.forRoot([HeaderPageEffect])
  ],
  providers: [
    Actions,
    AppService,
  ]
})
export class HeaderModule { }
