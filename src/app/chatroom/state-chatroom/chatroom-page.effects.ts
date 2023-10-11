import {createEffect, ofType, Actions} from "@ngrx/effects";
import * as chatroomActions from './chatroom-page.actions'
import {catchError, map, of, switchMap} from "rxjs";
import {ChatroomService} from "../chatroom.service";
import * as chatroomInterface from './chatroom-page.interface'
import {Injectable} from "@angular/core";

@Injectable()
export class ChatroomDataEffects {
  constructor(private chatroomService: ChatroomService, private actions$: Actions) {
  }

  fetchData$: any = createEffect(() => this.actions$.pipe(
    ofType(chatroomActions.allMessagesGet),
    switchMap(() =>
    this.chatroomService.allMessages().pipe(
      map((data: chatroomInterface.allMessages) => chatroomActions.allMessagesSuccess(data)),
      catchError(error => of(chatroomActions.allMessagesError({error})))
    )
  )))

  newMessage$: any = createEffect(() => this.actions$.pipe(
    ofType(chatroomActions.newMessages),
    switchMap((action) => this.chatroomService.newMessages(action.message).pipe(
      map(() => chatroomActions.newMessagesSuccess()),
      catchError(error => of(chatroomActions.newMessagesError({error})))
    ))
  ))
}
/*
create observable function that is createEffect
open a pipe on it to listen to the action you setup
after that action gets dispatched you transfer listening with switchmap
you call a service that sends request to server and you open pipe to listen for an answer on it
after getting a response that pipe picks up on, you return value you get to a success action
and make an optional catcherror that if it returns an error.
*/
