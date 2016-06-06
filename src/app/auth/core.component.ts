import { Component, EventEmitter, Output } from '@angular/core'
import { ROUTER_DIRECTIVES } from '@angular/router'
import { ChattrAuthCoreLoginComponent } from './core-login.component'

@Component({
  moduleId: module.id,
  templateUrl: 'core.component.html',
  styleUrls: ['auth.component.css'],
  directives: [ChattrAuthCoreLoginComponent, ROUTER_DIRECTIVES]
})

export class ChattrAuthCoreComponent {

}
