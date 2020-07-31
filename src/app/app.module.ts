import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { ParrentComponent } from './parrent/parrent.component';
import { HOWTOGETArrayAngularComponent } from './how-to-get-array-angular/how-to-get-array-angular.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ParrentComponent,
    HOWTOGETArrayAngularComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
