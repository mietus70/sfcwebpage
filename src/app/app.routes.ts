import {NgModule} from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import {MainPageComponent} from "./components/pages/main-page/main-page.component";
import {ErrorPageComponent} from "./components/pages/error-page/error-page.component";

export const appRoutes: Routes = [
  { path: '', component: MainPageComponent, data: {no_header: true} },
  { path: 'not-found', component: ErrorPageComponent, data: {no_header: true} },
  { path: '**', redirectTo: '/not-found', data: {no_header: true} },
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
