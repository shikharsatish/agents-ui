import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AddAgencyComponent } from './agency/add-agency/add-agency.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { RestService } from './service/rest-service/rest.service';
import { AddCompanyComponent } from './company/add-company/add-company.component';
import { CompanyListComponent } from './company/company-list/company-list.component';
import { HttpInterceptorService } from './service/http/http-interceptor.service';
import { EditCompanyComponent } from './company/edit-company/edit-company.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HeaderComponent,
    FooterComponent,
    AddAgencyComponent,
    AddUserComponent,
    AddCompanyComponent,
    CompanyListComponent,
    EditCompanyComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [RestService, {provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
