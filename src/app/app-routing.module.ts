import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { ApiComponent } from './api/api.component';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ItemComponent } from './item/item.component';
import { ItemListComponent } from './item-list/item-list.component';

const routes: Routes = [
  {
    path: 'header',
    component:  HeaderComponent
  },
  {
    path:  'home',
    component:  HomeComponent
    },
    {
    path:  'about',
    component:  AboutComponent
    },
    {
    path:  'contact',
    component:  ContactComponent
    },
    {
    path: 'albumData',
    component: ApiComponent
    },
    {
    path: 'product',
    component:  ProductComponent
    },
    {
      path: 'item',
      component:  ItemComponent
    },
    {
    path: '',
    redirectTo: '/item',
    pathMatch: 'full'
    },
    {
      path: 'item-list',
      component: ItemListComponent
    },
    ];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
    ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
