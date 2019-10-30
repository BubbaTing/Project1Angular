import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { ManagerPageComponent } from './manager-page/manager-page.component';
import { RequestComponent } from './request/request.component';
=======
import { ReviewRequestComponent } from './review-request/review-request.component';
>>>>>>> 3dafb26c394eba40393481d14a209dab6c76476e

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    ManagerPageComponent,
    RequestComponent
=======
    ReviewRequestComponent
>>>>>>> 3dafb26c394eba40393481d14a209dab6c76476e
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
