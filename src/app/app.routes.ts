import {NgModule} from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import {MainPageComponent} from "./components/pages/main-page/main-page.component";
import {ErrorPageComponent} from "./components/pages/error-page/error-page.component";
import {OfertaPageComponent} from "./components/pages/oferta-page/oferta-page.component";
import {CennikPageComponent} from "./components/pages/cennik-page/cennik-page.component";
import {GaleriaPageComponent} from "./components/pages/galeria-page/galeria-page.component";
import {KontaktPageComponent} from "./components/pages/kontakt-page/kontakt-page.component";
import {FaqPageComponent} from "./components/pages/faq-page/faq-page.component";
import {GrafikPageComponent} from "./components/pages/grafik-page/grafik-page.component";

export const appRoutes: Routes = [
  { path: '', component: MainPageComponent, data: {} },
  { path: 'oferta', component: OfertaPageComponent, data: {} },
  { path: 'cennik', component: CennikPageComponent, data: {} },
  { path: 'galeria', component: GaleriaPageComponent, data: {} },
  { path: 'kontakt', component: KontaktPageComponent, data: {} },
  { path: 'faq', component: FaqPageComponent, data: {} },
  { path: 'test/grafik', component: GrafikPageComponent, data: {} },

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
