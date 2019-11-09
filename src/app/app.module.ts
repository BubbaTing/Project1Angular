import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManagerPageComponent } from './manager-page/manager-page.component';

import { RequestsComponent } from './requests/requests.component';
import { LoginComponent } from './login/login.component';
import { TicketOptionComponent } from './ticket-option/ticket-option.component';
import { RequestComponent } from './request/request.component';
import { TicketsComponent } from './tickets/tickets.component';
import{ HttpClientModule } from '@angular/common/http';

import { StatusName } from './status-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TicketOptionComponent,
    ManagerPageComponent,
    RequestComponent,
    RequestsComponent,
    TicketsComponent,
    StatusName,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
