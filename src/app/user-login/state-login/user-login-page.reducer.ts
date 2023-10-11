import { Action, createReducer, on } from '@ngrx/store';
import * as LoginActions from './user-login-page.actions'

// state-chatroom interface - model of properties
export interface State {
  username: string,
  password: string
}

// initializing "initial" state-chatroom of object properties
export const initialState: State = {
  username: '',
  password: ''
}

//creating reducer for state-chatroom
export const loginReducer = createReducer(
  initialState,
  on(LoginActions.login, state => ({
    ...state, username: state.username  // = username
  })),
  //add as many state-chatroom

)
