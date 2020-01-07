import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProductComponent } from './product/product.component';
import { ApiComponent } from './api/api.component';
import { AppRoutingModule } from './app-routing.module';
import { ItemComponent } from './item/item.component';
import {  FormsModule,  ReactiveFormsModule  } from '@angular/forms';
import { ItemListComponent } from './item-list/item-list.component';
import { AgmCoreModule } from '@agm/core';
import { MapsComponent } from './maps/maps.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    SidebarComponent,
    ProductComponent,
    ApiComponent,
    ItemComponent,
    ItemListComponent,
    MapsComponent,
         ],
  entryComponents: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyByEVYYPDf-txvYUwpLItSsi7Ig2KC4GvU',
      libraries: ['places']
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
