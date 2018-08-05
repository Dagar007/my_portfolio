import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { WorkComponent } from './work/work.component';
import { ContactComponent } from './contact/contact.component';
import {RouterModule, Routes} from '@angular/router'
import { HomeComponent } from './home/home.component';

const appRoutes : Routes=[
  { path: 'home', component : HomeComponent },
  { path: 'about', component : AboutComponent },
  { path: 'contact', component : ContactComponent },
  { path: 'work', component : WorkComponent },
  { path: '', redirectTo : 'home',pathMatch :'full'},
  { path: '**', redirectTo : 'home',pathMatch :'full'},
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    WorkComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
