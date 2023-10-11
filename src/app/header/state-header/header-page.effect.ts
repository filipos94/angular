import {Actions, createEffect, ofType} from "@ngrx/effects";
import * as headerActions from './header-page.actions'
import {catchError, exhaustMap, map, of, switchMap} from "rxjs";
import {AppService} from "../../app.service";
import {usernameInterface} from "./header-page.interface";
import {Injectable} from "@angular/core";

@Injectable()
export class HeaderPageEffect {
  constructor(private actions$: Actions, private service: AppService) {}

  fetchData$ : any = createEffect(() => this.actions$.pipe(
    ofType(headerActions.headerGet),
    switchMap(() =>
      this.service.auth().pipe(
        map((data: usernameInterface) => headerActions.headerSuccess(data)),
        catchError(error => of(headerActions.headerError(error)))
      ))
  ))
}
