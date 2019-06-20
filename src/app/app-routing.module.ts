import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { DiscountComponent } from "./discount/discount.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { TravelComponent } from "./travel/travel.component";
import { PackagesComponent } from "./packages/packages.component";
import { TestemonialComponent } from "./testemonial/testemonial.component";
import { OfferComponent } from "./offer/offer.component";
import { BlogComponent } from "./blog/blog.component";
import { SubscribeComponent } from "./subscribe/subscribe.component";
import { ServiceComponent } from "./service/service.component";

const routes: Routes = [
  { path: "", redirectTo: "/Home", pathMatch: "full" },
  { path: "Home", component: HeaderComponent },
  { path: "About", component: AboutComponent },
  { path: "Home", component: TravelComponent },
  { path: "Home", component: ServiceComponent },
  { path: "Destination", component: GalleryComponent },
  { path: "Packages", component: PackagesComponent },
  { path: "Packages", component: DiscountComponent },
  { path: "Packages", component: TestemonialComponent },
  { path: "SpecialOffers", component: OfferComponent },
  { path: "Blog", component: BlogComponent },
  { path: "Subscription", component: SubscribeComponent },
  { path: "Subscription", component: FooterComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  declarations: [],

  exports: [RouterModule]
})
export class AppRoutingModule {}
