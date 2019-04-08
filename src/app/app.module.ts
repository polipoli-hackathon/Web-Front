import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HomeComponent } from './pages/home/home.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { ProjectListComponent } from './pages/project-list/project-list.component';
import { ProjectListItemComponent } from './components/project-list-item/project-list-item.component';
import { InputProjectComponent } from './pages/input-project/input-project.component';
import { ShareComponent } from './components/share/share.component';
import { AlertComponent } from './components/alert/alert.component';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDatepickerModule, MatFormFieldModule, MatNativeDateModule, MatInputModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    ProjectListItemComponent,
    InputProjectComponent,
    HomeComponent,
    ShareComponent,
    AlertComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule,
    FormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule
  ],
  providers: [ AngularFirestore ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
