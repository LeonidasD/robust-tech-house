import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatSelectModule, MatTableModule, MatPaginatorModule, MatDialogModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';



import { LoginComponent } from './components/partial/login/login.component';
import { HNavComponent } from './components/fixed/h-nav/h-nav.component';
import { ErrorComponent } from './components/fixed/error/error.component';
import { HomeComponent } from './components/partial/home/home.component';
import { VNavComponent } from './components/fixed/v-nav/v-nav.component';
import { HistoryComponent } from './components/partial/order/history/history.component';

// used to create fake backend
import { fakeBackendProvider } from './helpers/fake-backend';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { DetailsComponent } from './components/partial/order/details/details.component';
import { IncomeComponent } from './components/partial/income/income.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HNavComponent,
    ErrorComponent,
    HomeComponent,
    VNavComponent,
    HistoryComponent,
    DetailsComponent,
    IncomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatSelectModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  entryComponents: [ DetailsComponent ],
  exports: [ DetailsComponent ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    DatePipe,
    // provider used to create fake backend
    fakeBackendProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
