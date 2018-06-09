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
import {OfferPageComponent} from './components/pages/offer-page/offer-page.component';
import {PricePageComponent} from './components/pages/price-page/price-page.component';
import {GalleryPageComponent} from './components/pages/gallery-page/gallery-page.component';
import {ContactPageComponent} from './components/pages/contact-page/contact-page.component';
import {FaqPageComponent} from './components/pages/faq-page/faq-page.component';
import {SchedulePageComponent} from './components/pages/schedule-page/schedule-page.component';
import {BannerClassesComponent} from './components/elements/banner-classes/banner-classes.component';
import {NgxGalleryModule} from "ngx-gallery";
import { ListElementComponent } from './components/elements/list-element/list-element.component';

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
    OfferPageComponent,
    PricePageComponent,
    GalleryPageComponent,
    ContactPageComponent,
    FaqPageComponent,
    SchedulePageComponent,
    BannerClassesComponent,
    ListElementComponent
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
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
