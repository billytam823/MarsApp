 //Angular utilities import
import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

//Importing the main components and read the components
import { Angular2ProjectAppComponent, environment } from './app/';
//inject http provide
import { HTTP_PROVIDERS } from '@angular/http';
import {ROUTER_PROVIDERS } from '@angular/router';
import { ROUTER_DIRECTIVES } from '@angular/router';

if (environment.production) {
  enableProdMode();
}

//allows execution of the modules
bootstrap(Angular2ProjectAppComponent, [HTTP_PROVIDERS, ROUTER_PROVIDERS, ROUTER_DIRECTIVES]);

