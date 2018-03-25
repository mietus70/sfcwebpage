import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ElementComponent } from './components/element/element/element.component';
import { FooterComponent } from './components/elements/main-elements/footer/footer.component';
import { HeaderComponent } from './components/elements/main-elements/header/header.component';
import { TopMenuComponent } from './components/elements/main-elements/top-menu/top-menu.component';
import { PageComponent } from './components/page/page.component';
import { ErrorPageComponent } from './components/pages/error-page/error-page.component';
import { MainPageComponent } from './components/pages/main-page/main-page.component';
import { WidgetComponent } from './components/widget/widget.component';

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
    WidgetComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
