import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskComponent } from './components/task/task.component';
import { EnterTaskComponent } from './components/enter-task/enter-task.component';
import { CheckboxComponent } from '../shared/ui/components/checkbox/checkbox.component';


@NgModule({
  declarations: [TaskListComponent, TaskComponent, EnterTaskComponent, CheckboxComponent],
  imports: [
    CommonModule,
    TasksRoutingModule
  ]
})
export class TasksModule { }
