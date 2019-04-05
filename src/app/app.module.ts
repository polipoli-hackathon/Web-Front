import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventListComponent } from './pages/event-list/event-list.component';
import { EventListItemComponent } from './pages/event-list-item/event-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
