import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { adDirective } from './Ad.directive';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Core/Navbar/Navbar.component';
import { ServiceHomeService } from './Service-home.service';
import { PostCardComponent } from './Shared/card-templates/Post-card/Post-card.component';
import { ProductCardComponent } from './Shared/card-templates/Product-card/Product-card.component';
import { QuoteCardComponent } from './Shared/card-templates/Quote-card/Quote-card.component';
import { GalleryComponent } from './Gallery/Gallery.component';


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
