import {usernameInterface} from "./header-page.interface";
import {createFeatureSelector, createReducer, createSelector, on} from "@ngrx/store";
import * as headerActions from "./header-page.actions"
import {onError, onRequestAction, onSuccess, onSuccess2} from "../../../helpers/state.helpers";

export const initialState: usernameInterface = {
  id: 0,
  username: ''
}

export const messageFeatureKeyHeader = 'header'

export const headerReducer = createReducer(
  initialState,
  on(headerActions.headerGet, (state) => onRequestAction(state)),
  on(headerActions.headerSuccess, (state, payload) => onSuccess2(state, payload)),
  on(headerActions.headerError, (state) => onError(state))
)

export const selectHeader = createFeatureSelector<usernameInterface>('header')

export const headerSelector = createSelector(
  selectHeader,
  (state: usernameInterface) => state.username
)
