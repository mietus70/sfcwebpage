import { NgtUniversalModule } from '@ng-toolkit/universal';
import { CommonModule }       from '@angular/common';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA
}                             from '@angular/core';
import {
  ModalModule,
  TabsModule
}                             from "ngx-bootstrap";

import { AppComponent }              from './app.component';
import { ElementComponent }          from './components/element/element/element.component';
import { FooterComponent }           from './components/elements/main-elements/footer/footer.component';
import { HeaderComponent }           from './components/elements/main-elements/header/header.component';
import { TopMenuComponent }          from './components/elements/main-elements/top-menu/top-menu.component';
import { PageComponent }             from './components/page/page.component';
import { ErrorPageComponent }        from './components/pages/error-page/error-page.component';
import { MainPageComponent }         from './components/pages/main-page/main-page.component';
import { WidgetComponent }           from './components/widget/widget.component';
import { AppRoutingModule }          from './app.routes';
import { FormsModule }               from "@angular/forms";
import { HttpClientModule }          from "@angular/common/http";
import { BannerHeaderComponent }     from './components/elements/main-elements/banner-header/banner-header.component';
import { MenuHeaderBottomComponent } from './components/elements/main-elements/menu-header-bottom/menu-header-bottom.component';
import { NewsComponent }             from './components/elements/news/news.component';
import { FirstUppercasePipe }        from './pipes/first-uppercase.pipe';
import { OfferPageComponent }     from './components/pages/offer-page/offer-page.component';
import { PricePageComponent }     from './components/pages/price-page/price-page.component';
import { GalleryPageComponent }   from './components/pages/gallery-page/gallery-page.component';
import { ContactPageComponent }   from './components/pages/contact-page/contact-page.component';
import { FaqPageComponent }       from './components/pages/faq-page/faq-page.component';
import { SchedulePageComponent }  from './components/pages/schedule-page/schedule-page.component';
import { BannerClassesComponent } from './components/elements/banner-classes/banner-classes.component';
import { NgxGalleryModule }       from "ngx-gallery";
import { ListElementComponent }   from './components/elements/list-element/list-element.component';
import { StatutePageComponent }   from './components/pages/statute-page/statute-page.component';
import { RodoPageComponent }      from './components/pages/rodo-page/rodo-page.component';
import { MyRouterService }        from "./services/my-router.service";
// import { AgmCoreModule }                   from '@agm/core';
// import { Angulartics2GoogleGlobalSiteTag } from 'angulartics2/gst';
// import { Angulartics2Module }              from 'angulartics2';
// import { Angulartics2GoogleAnalytics }     from 'angulartics2/ga';

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
    ListElementComponent,
    StatutePageComponent,
    RodoPageComponent
  ],
  imports: [
    CommonModule,
    NgtUniversalModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ModalModule.forRoot(),
    TabsModule.forRoot(),
    NgxGalleryModule,
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyCd6q6z2uVc3OMug-yscIkGmWZA0K5CCoA'
    // }),
    // Angulartics2Module.forRoot(),
  ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
