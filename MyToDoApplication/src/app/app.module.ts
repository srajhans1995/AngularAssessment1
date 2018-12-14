import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from '/home/sushantr/dev/Sushant/MyToDoApplication/src/app/header/header.component';
import { TodoComponent } from './to-do/to-do.component';
import { TodoListComponent } from './to-do/list/list.component';
import {CreateComponent } from './to-do/create/create.component';
import { EditComponent } from './to-do/edit/edit.component';
import { CategoryComponent } from './category/category.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoComponent,
    TodoListComponent,
    CreateComponent,
    EditComponent,
    CategoryComponent
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
