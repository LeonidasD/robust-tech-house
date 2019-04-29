import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatSelectModule } from '@angular/material';


import { LoginComponent } from './components/partial/login/login.component';
import { HNavComponent } from './components/fixed/h-nav/h-nav.component';
import { ErrorComponent } from './components/fixed/error/error.component';
import { HomeComponent } from './components/partial/home/home.component';
import { VNavComponent } from './components/fixed/v-nav/v-nav.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HNavComponent,
    ErrorComponent,
    HomeComponent,
    VNavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatSelectModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
