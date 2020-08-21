import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryProductsComponent } from './products/components/category-products/category-products.component';
import { Error404Component } from './shared/error404/error404.component';
import { DetailProductComponent } from './products/components/detail-product/detail-product.component';
import { DashboardComponent } from './administrator/dashboard/dashboard.component';
import { FormComponent } from './administrator/form/form.component';
import { TableComponent } from './administrator/table/table.component';


const routes: Routes = [
  { path: 'home', component: CategoryProductsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'detailProduct/:id', component: DetailProductComponent },
  { path: 'cart', component: CategoryProductsComponent },
  { path: 'administrator', component: DashboardComponent },
  { path: 'administrator/form', component: FormComponent },
  { path: 'administrator/table', component: TableComponent },
  { path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
