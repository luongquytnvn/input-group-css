import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { SlickComponent } from './slick/slick.component';
import { TestSlickComponent } from './test-slick/test-slick.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Test1Component } from './test-slick/test1/test1.component';
import { Test2Component } from './test-slick/test2/test2.component';
import { Test3Component } from './test-slick/test3/test3.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    SlickComponent,
    TestSlickComponent,
    Test1Component,
    Test2Component,
    Test3Component
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
