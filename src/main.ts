import { bootstrap } from '@angular/platform-browser-dynamic'
import { enableProdMode } from '@angular/core'
import { ChattrAppComponent, environment } from './app/'
import { ROUTER_PROVIDERS } from '@angular/router'
import { HTTP_PROVIDERS } from '@angular/http'

if (environment.production) {
  enableProdMode()
}

bootstrap(ChattrAppComponent, [ROUTER_PROVIDERS, HTTP_PROVIDERS])
