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
import { PostComponent } from './post/post.component';
import { ArticleComponent } from './article/article.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PagerService } from './pager.service';

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
    FooterComponent,
    PostComponent,
    ArticleComponent,
    NotfoundComponent,
    PaginationComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [ConfigService, PagerService],
  bootstrap: [AppComponent]
})
export class AppModule {}
