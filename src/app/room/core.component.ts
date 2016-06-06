import { Component } from '@angular/core'
import { ChattrChatRoomMessagesComponent } from './messages.component'
import { ChattrChatRoomFormComponent } from './form.component'
import { ChattrChatRoomUsersComponent } from './users.component'

declare var io: any

@Component({
  moduleId: module.id,
  templateUrl: 'core.component.html',
  directives: [ChattrChatRoomMessagesComponent, ChattrChatRoomFormComponent, ChattrChatRoomUsersComponent],
  styleUrls: ['core.component.css']
})

export class ChattrChatRoomCoreComponent {

}
