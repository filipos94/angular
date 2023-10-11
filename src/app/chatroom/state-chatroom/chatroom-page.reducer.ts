import {Action, createFeatureSelector, createReducer, createSelector, on} from '@ngrx/store';
import * as ChatroomActions from './chatroom-page.actions';
import {state} from "@angular/animations";
import * as states from '../../../helpers/state.helpers'
import {onError, onRequestAction, onSuccess, onSuccess3} from "../../../helpers/state.helpers";

export const messageFeatureKeyChatroom = 'message'

export interface State {
  messages: object
  newMessage: string
}

export const initialState: State = {
  messages: {
    id: 0,
    message: '',
    date: '',
    UserID: ''
  }, newMessage: ''
}

export const selectMessage = createFeatureSelector<State>('chatroom')

export const chatroomReducer = createReducer(
  initialState,
  on(ChatroomActions.allMessagesGet, (state) => onRequestAction(state)),
  on(ChatroomActions.allMessagesSuccess, (state, {payload}) => onSuccess(state, payload)),
  on(ChatroomActions.allMessagesError,(state) => onError(state)),

  on(ChatroomActions.newMessages, (state) => onRequestAction(state)),
  on(ChatroomActions.newMessagesSuccess, (state) => onSuccess3(state)),
  on(ChatroomActions.newMessagesError, (state) => onRequestAction(state)),
)

export const selectMessages = createSelector(
  selectMessage,
  (state: State) => state.messages
)
