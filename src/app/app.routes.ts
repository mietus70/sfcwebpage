import {NgModule} from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import {MainPageComponent} from "./components/pages/main-page/main-page.component";
import {ErrorPageComponent} from "./components/pages/error-page/error-page.component";
import {PricePageComponent} from "./components/pages/price-page/price-page.component";
import {OfferPageComponent} from "./components/pages/offer-page/offer-page.component";
import {GalleryPageComponent} from "./components/pages/gallery-page/gallery-page.component";
import {ContactPageComponent} from "./components/pages/contact-page/contact-page.component";
import {FaqPageComponent} from "./components/pages/faq-page/faq-page.component";
import {SchedulePageComponent} from "./components/pages/schedule-page/schedule-page.component";
import {StatutePageComponent} from "./components/pages/statute-page/statute-page.component";
import {RodoPageComponent} from "./components/pages/rodo-page/rodo-page.component";

export const appRoutes: Routes = [
  { path: '', component: MainPageComponent, data: {} },
  { path: 'oferta', component: OfferPageComponent, data: {} },
  { path: 'cennik', component: PricePageComponent, data: {} },
  { path: 'galeria', component: GalleryPageComponent, data: {} },
  { path: 'kontakt', component: ContactPageComponent, data: {} },
  { path: 'faq', component: FaqPageComponent, data: {} },
  { path: 'regulamin', component: StatutePageComponent, data: {} },
  { path: 'rodo', component: RodoPageComponent, data: {} },
  { path: 'grafik', component: SchedulePageComponent, data: {} },

  { path: 'not-found', component: ErrorPageComponent, data: {} },
  { path: '**', redirectTo: '/not-found', data: {} },
];

@NgModule({
  imports: [
    // RouterModule.forRoot(appRoutes, {useHash: true})
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
