import { Component, OnInit } from '@angular/core'
import { ChatMessage } from '../classes/chat-message.class'

@Component({
  moduleId: module.id,
  selector: 'chattr-app-chat-messages',
  templateUrl: 'messages.component.html'
})

export class ChattrChatRoomMessagesComponent implements OnInit {
  messages: Array<ChatMessage>
  temp: ChatMessage

  constructor() {}

  onRecieveMessage(message: ChatMessage) {
    this.messages.push(message)
  }

  ngOnInit(): any {
    this.messages = []
    this.temp = {
      user: '',
      date: '',
      content: ''
    }

    var datetime = new Date(2016, 4, 31, 16, 21, 0)
    this.messages.push({
      user: 'nathanbland',
      date: datetime.toString(),
      content: "Look at me, I'm a developer!"
    })
    datetime = new Date(2016, 4, 31, 16, 21, 6)
    this.messages.push({
      user: 'keawade',
      date: datetime.toString(),
      content: "Haha, what's up?"
    })
    datetime = new Date(2016, 4, 31, 16, 21, 7)
    this.messages.push({
      user: 'nathanbland',
      date: datetime.toString(),
      content: "I'm a developer!"
    })
    datetime = new Date(2016, 4, 31, 16, 21, 15)
    this.messages.push({
      user: 'crodeheaver',
      date: datetime.toString(),
      content: "Nathan's brain broke after trying to understand why anyone would use statically typed variables."
    })
    datetime = new Date(2016, 4, 31, 16, 21, 24)
    this.messages.push({
      user: 'keawade',
      date: datetime.toString(),
      content: "lol, I guess that makes sense..."
    })
    datetime = new Date(2016, 4, 31, 16, 21, 25)
    this.messages.push({
      user: 'nathanbland',
      date: datetime.toString(),
      content: "Developer!"
    })
    datetime = new Date(2016, 4, 31, 16, 21, 54)
    this.messages.push({
      user: 'crodeheaver',
      date: datetime.toString(),
      content: "Anyways..."
    })
    datetime = new Date(2016, 4, 31, 16, 22, 3)
    this.messages.push({
      user: 'keawade',
      date: datetime.toString(),
      content: "Yeah, I'll see you guys later then."
    })
  }
}
