import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { ButtonModule } from 'primeng/button';
import { SpeedDialModule } from 'primeng/speeddial';

import { AppComponent } from './app.component';
import { MainComponent } from './views/main/main.component';

@NgModule({
  declarations: [AppComponent, MainComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    SpeedDialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
