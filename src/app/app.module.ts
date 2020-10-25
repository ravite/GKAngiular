import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RetirementComponent } from './retirement/retirement.component';
import { ModalContentComponent } from './modal-content/modal-content.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { CustomersComponent } from './customers/customers.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RetirementComponent,
    ModalContentComponent,
    LoginComponent,
    CustomersComponent,
    DetailsComponent
  ],
  entryComponents: [ModalContentComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ModalModule.forRoot(),
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
