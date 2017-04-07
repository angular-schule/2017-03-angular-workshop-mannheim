import { BookStoreService } from './shared/book-store.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookComponent } from './book/book.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { CounterActions } from './actions/counter.actions';

import { NgReduxModule, DevToolsExtension } from '@angular-redux/store';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BookComponent,
    CreateBookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    NgReduxModule
  ],
  providers: [
    BookStoreService,
    DevToolsExtension,
    CounterActions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
