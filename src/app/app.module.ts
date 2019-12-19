import { LandingModule } from './landing/landing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // HttpClientModule,
    // MaterialModule,
    // FlexLayoutModule,
    // FormsModule,
    // ReactiveFormsModule,
    AppRoutingModule,
    LandingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
