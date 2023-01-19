import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { adDirective } from './ad.directive';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Core/navbar/navbar.component';
import { ServiceHomeService } from './service-home.service';
import { PostCardComponent } from './Shared/card-templates/post-card/post-card.component';
import { ProductCardComponent } from './Shared/card-templates/product-card/product-card.component';
import { QuoteCardComponent } from './Shared/card-templates/quote-card/quote-card.component';
import { GalleryComponent } from './gallery/gallery.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostCardComponent,
    ProductCardComponent,
    QuoteCardComponent,
    adDirective,
    GalleryComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ServiceHomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
