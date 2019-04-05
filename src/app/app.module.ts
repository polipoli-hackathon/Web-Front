import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventListComponent } from './pages/event-list/event-list.component';
import { EventListItemComponent } from './pages/event-list-item/event-list-item.component';
import { InputEventComponent } from './pages/input-event/input-event.component';

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventListItemComponent,
    InputEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
