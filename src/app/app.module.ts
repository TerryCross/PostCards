import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { ApostComponent } from './components/apost/apost.component';
import { HeaderComponent } from './components/header/header.component';
import { NewpostComponent } from './components/newpost/newpost.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
      AppComponent,
      TabsComponent,
      ApostComponent,
      HeaderComponent,
      NewpostComponent,
      LoginComponent
  ],
  imports: [
    BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
