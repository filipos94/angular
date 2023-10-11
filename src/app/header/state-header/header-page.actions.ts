import {createAction} from "@ngrx/store";
import {usernameInterface} from "./header-page.interface";

export const headerGet = createAction('[Header Page] Get User')
export const headerSuccess = createAction('[Header Page] Success User', (payload: usernameInterface) => (payload))
export const headerError = createAction('[Header Page] Error User', (error: any) => (error))

