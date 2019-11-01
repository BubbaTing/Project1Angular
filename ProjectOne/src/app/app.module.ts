import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManagerPageComponent } from './manager-page/manager-page.component';

import { RequestsComponent } from './requests/requests.component';
import { LoginComponent } from './login/login.component';
import { TicketOptionComponent } from './ticket-option/ticket-option.component';
import { RequestComponent } from './request/request.component';
import { TicketsComponent } from './tickets/tickets.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TicketOptionComponent,
    ManagerPageComponent,
    RequestComponent,
    RequestsComponent,
    TicketsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
