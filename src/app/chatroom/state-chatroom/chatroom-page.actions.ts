import {createAction, props} from "@ngrx/store";
import {newMessage, allMessages} from "./chatroom-page.interface";

export const newMessages = createAction('[Chatroom Page] newMessage', (message: string) => ({message}))
export const newMessagesSuccess = createAction('[Chatroom Page] newMessage Success')
export const newMessagesError = createAction('[Chatroom Page] newMessage Error', (error: any) => ({error}))


export const allMessagesGet = createAction('[Chatroom Page] allMessages Get')
export const allMessagesSuccess = createAction('[Chatroom Page] allMessages Success', (payload: allMessages) => ({payload}))
export const allMessagesError = createAction('[Chatroom Page] allMessages Error', (error: any) => ({error}))
