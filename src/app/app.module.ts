import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ConfigService } from "./config.service";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { AboutComponent } from "./about/about.component";

import { ServiceComponent } from "./service/service.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { DiscountComponent } from "./discount/discount.component";
import { PackagesComponent } from "./packages/packages.component";

import { OfferComponent } from "./offer/offer.component";
import { BlogComponent } from "./blog/blog.component";
import { SubscribeComponent } from "./subscribe/subscribe.component";
import { FooterComponent } from "./footer/footer.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,

    ServiceComponent,
    GalleryComponent,
    DiscountComponent,
    PackagesComponent,

    OfferComponent,
    BlogComponent,
    SubscribeComponent,
    FooterComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule {}
