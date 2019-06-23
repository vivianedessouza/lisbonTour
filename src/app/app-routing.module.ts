import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";

import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PackagesComponent } from './packages/packages.component';
import { OfferComponent } from './offer/offer.component';
import { BlogComponent } from './blog/blog.component';
import { ArticleComponent } from './article/article.component';
import { SubscribeComponent } from './subscribe/subscribe.component';


const routes: Routes = [
  { path: "", redirectTo: "/Home", pathMatch: "full" },
  { path: "Home", component: AboutComponent },
  { path: "Destination", component: GalleryComponent },
  { path: "Packages", component: PackagesComponent },
  { path: "SpecialOffers", component: OfferComponent },
  { path: "Blog", component: BlogComponent },
  { path: "Article/:id", component: ArticleComponent },
  { path: "Subscription", component: SubscribeComponent },
  
];


@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  declarations: [],

  exports: [RouterModule]
})
export class AppRoutingModule {}
