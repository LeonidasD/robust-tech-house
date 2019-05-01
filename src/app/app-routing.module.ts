import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/partial/login/login.component';
import { HomeComponent } from './components/partial/home/home.component';
import { ErrorComponent } from './components/fixed/error/error.component';
import { AuthGuard } from './guard/auth.guard';
import { HistoryComponent } from './components/partial/order//history/history.component';
import { IncomeComponent } from './components/partial/income/income.component';

const routes: Routes = [
    {
      path: 'login',
      component: LoginComponent,
    },
    {
      path: '',
      component: HomeComponent,
      canActivate: [AuthGuard]
    },
    {
      path: 'order/history',
      component: HistoryComponent,
      canActivate: [AuthGuard]
    },
    {
      path: 'income',
      component: IncomeComponent,
      canActivate: [AuthGuard]
    },

    { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
