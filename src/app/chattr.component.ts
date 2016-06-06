import { Component } from '@angular/core'
import { Routes, ROUTER_DIRECTIVES } from '@angular/router'
import { ChattrHeaderComponent } from './header/header.component'
import { ChattrChatCoreComponent } from './chat/core.component'
import { ChattrAuthCoreComponent } from './auth/core.component'
import { ChattrAuthRegisterComponent } from './auth/register.component'
import { ChattrChatRoomCoreComponent } from './room/core.component'

@Component({
  moduleId: module.id,
  selector: 'chattr-app',
  templateUrl: 'chattr.component.html',
  directives: [ChattrHeaderComponent, ROUTER_DIRECTIVES],
  styleUrls: ['chattr.component.css']
})

@Routes([
  {
    path: '/',
    component: ChattrAuthCoreComponent//,
    //useAsDefault: true
  },
  {
    path: '/chat/:room',
    component: ChattrChatRoomCoreComponent
  },
  {
    path: '/chat',
    component: ChattrChatCoreComponent
  },
  {
    path: '/register',
    component: ChattrAuthRegisterComponent
  }
])

export class ChattrAppComponent {
  title = 'Chattr'
}
