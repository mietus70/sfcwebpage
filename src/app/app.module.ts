import {BrowserModule} from '@angular/platform-browser';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import {ModalModule, TabsModule} from "ngx-bootstrap";

import {AppComponent} from './app.component';
import {ElementComponent} from './components/element/element/element.component';
import {FooterComponent} from './components/elements/main-elements/footer/footer.component';
import {HeaderComponent} from './components/elements/main-elements/header/header.component';
import {TopMenuComponent} from './components/elements/main-elements/top-menu/top-menu.component';
import {PageComponent} from './components/page/page.component';
import {ErrorPageComponent} from './components/pages/error-page/error-page.component';
import {MainPageComponent} from './components/pages/main-page/main-page.component';
import {WidgetComponent} from './components/widget/widget.component';
import {AppRoutingModule} from './app.routes';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {BannerHeaderComponent} from './components/elements/main-elements/banner-header/banner-header.component';
import {MenuHeaderBottomComponent} from './components/elements/main-elements/menu-header-bottom/menu-header-bottom.component';
import {NewsComponent} from './components/elements/news/news.component';
import {FirstUppercasePipe} from './pipes/first-uppercase.pipe';
import {OfertaPageComponent} from './components/pages/oferta-page/oferta-page.component';
import {CennikPageComponent} from './components/pages/cennik-page/cennik-page.component';
import {GaleriaPageComponent} from './components/pages/galeria-page/galeria-page.component';
import {KontaktPageComponent} from './components/pages/kontakt-page/kontakt-page.component';
import {FaqPageComponent} from './components/pages/faq-page/faq-page.component';
import {GrafikPageComponent} from './components/pages/grafik-page/grafik-page.component';
import {MyRouterService} from "./services/my-router.service";
import {BannerClassesComponent} from './components/elements/banner-classes/banner-classes.component';
import {FaqService} from "./services/faq.service";
import {NgxGalleryModule} from "ngx-gallery";

@NgModule({
  declarations: [
    AppComponent,
    ElementComponent,
    FooterComponent,
    HeaderComponent,
    TopMenuComponent,
    PageComponent,
    ErrorPageComponent,
    MainPageComponent,
    WidgetComponent,
    BannerHeaderComponent,
    MenuHeaderBottomComponent,
    NewsComponent,
    FirstUppercasePipe,
    OfertaPageComponent,
    CennikPageComponent,
    GaleriaPageComponent,
    KontaktPageComponent,
    FaqPageComponent,
    GrafikPageComponent,
    BannerClassesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ModalModule.forRoot(),
    TabsModule.forRoot(),
    NgxGalleryModule
  ],
  providers: [
    MyRouterService,
    FaqService
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
