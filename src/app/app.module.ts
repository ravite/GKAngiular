import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ModalContentComponent } from './modal-content/modal-content.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { CustomersComponent } from './customers/customers.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';
import { DetailsComponent } from './details/details.component';
import { HierarchyComponent } from './hierarchy/hierarchy.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { AuthGuard } from './_guards/index';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { TreeNodeComponent } from './tree-node/tree-node.component';
// import { TreeviewModule } from 'ngx-treeview';
import { TreeViewModule } from '@syncfusion/ej2-angular-navigations';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ModalContentComponent,
    LoginComponent,
    CustomersComponent,
    DetailsComponent,
    HierarchyComponent,
    CustomerDetailsComponent,
    TreeNodeComponent
  ],
  entryComponents: [ModalContentComponent],
  imports: [
    TreeViewModule,
    BrowserModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ModalModule.forRoot(),
  ],
  providers: [HttpService,authInterceptorProviders,
    AuthGuard,],
  bootstrap: [AppComponent]
})
export class AppModule { }
