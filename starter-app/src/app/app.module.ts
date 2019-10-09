import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksModule } from './tasks/tasks.module';
import { LoggerService, ConsoleLoggerService } from './shared/utility';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TasksModule,
    AppRoutingModule
  ],
  providers: [
    { provide: LoggerService, useClass: ConsoleLoggerService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
