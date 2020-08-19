import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryProductsComponent } from './products/components/category-products/category-products.component';
import { Error404Component } from './shared/error404/error404.component';


const routes: Routes = [
  { path: 'home', component: CategoryProductsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
