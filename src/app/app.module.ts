import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { ButtonModule } from 'primeng/button';
import { SpeedDialModule } from 'primeng/speeddial';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';

import { AppComponent } from './app.component';
import { MainComponent } from './views/main/main.component';
import { ListComponent } from './components/list/list.component';
import { SearcherComponent } from './components/searcher/searcher.component';
import { InputFocusDirective } from './directives/input-focus.directive';

@NgModule({
  declarations: [AppComponent, MainComponent, ListComponent, SearcherComponent, InputFocusDirective],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    SpeedDialModule,
    TableModule,
    CardModule,
    DropdownModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
