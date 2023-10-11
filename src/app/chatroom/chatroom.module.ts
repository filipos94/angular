import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from "@ngrx/store";
import {chatroomReducer, messageFeatureKeyChatroom} from "./state-chatroom/chatroom-page.reducer";
import {EffectsModule} from "@ngrx/effects";
import {ChatroomDataEffects} from "./state-chatroom/chatroom-page.effects";
import {ChatroomService} from "./chatroom.service";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(
      messageFeatureKeyChatroom,
      chatroomReducer,
    ),
    EffectsModule.forRoot([ChatroomDataEffects]),
  ],
})
export class ChatroomModule { }
