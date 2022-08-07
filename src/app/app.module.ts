import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoistComponent } from './components/todoist/todoist.component';
import { TodoistAddComponent } from './components/todoist-add/todoist-add.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoistComponent,
    TodoistAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
