import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AuthGuard } from './user/auth.guard';
import { LoginComponent } from './user/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'products',
    canActivate: [AuthGuard],
    component: ProductListComponent
  },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
