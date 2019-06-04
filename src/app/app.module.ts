import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { DeberesComponent } from './deberes/deberes.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DeberesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [
  appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
