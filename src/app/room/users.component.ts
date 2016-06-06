import { Component } from '@angular/core'

@Component({
  moduleId: module.id,
  selector: 'chattr-app-chat-users',
  templateUrl: 'users.component.html',
  styleUrls: ['users.component.css']
})

export class ChattrChatRoomUsersComponent {
  users: Array<String>
}
