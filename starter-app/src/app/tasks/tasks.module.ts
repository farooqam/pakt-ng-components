import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskComponent } from './components/task/task.component';
import { EnterTaskComponent } from './components/enter-task/enter-task.component';
import { UiModule } from '../shared/ui/ui.module';
import { TaskService } from './services/task.service';
import { TaskListContainerComponent } from './components/task-list-container/task-list-container.component';


@NgModule({
  declarations: [TaskListComponent, TaskComponent, EnterTaskComponent, TaskListContainerComponent],
  imports: [
    CommonModule,
    UiModule,
    TasksRoutingModule
  ],
  providers: [
    TaskService
  ]
})
export class TasksModule { }
