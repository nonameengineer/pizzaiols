import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RootStoreModule} from '@app/store/root';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InMemoryWebApiModule} from '@app/in-memory-web-api/in-memory-web-api.module';
import { NavbarModule } from '@app/modules/shared/navbar/navbar.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    InMemoryWebApiModule,
    AppRoutingModule,
    RootStoreModule,
    NavbarModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
