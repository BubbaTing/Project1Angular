import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TicketOptionComponent } from './ticket-option/ticket-option.component';
import { TicketsComponent } from './tickets/tickets.component';
import { RequestComponent } from './request/request.component';
import { RequestsComponent } from './requests/requests.component';



const routes: Routes = [{
  path: 'login',
  component: LoginComponent
}, {
  path: '',
  redirectTo: 'login',
  pathMatch: 'full'
}, {
  path: 'ticket_option',
  component: TicketOptionComponent
}, {
  path: 'tickets',
  component: TicketsComponent
}, {
  path: 'request',
  component: RequestComponent
}, {
  path: 'requests',
  component: RequestsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
