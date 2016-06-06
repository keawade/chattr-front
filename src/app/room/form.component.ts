import { Component } from '@angular/core'

@Component({
  moduleId: module.id,
  selector: 'chattr-app-chat-form',
  templateUrl: 'form.component.html',
  styleUrls: ['form.component.css']
})

export class ChattrChatRoomFormComponent {
  chatBox: string

  send(message) {
    console.log(message)
    this.chatBox = ''
  }
}
