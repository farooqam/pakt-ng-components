import { Component, ViewEncapsulation } from '@angular/core';
import { Task } from '../../models';
import { IdGenService } from 'src/app/shared/utility';

@Component({
  selector: 'mac-task-list',
  templateUrl: './task-list.component.html'
})
export class TaskListComponent {

  constructor(private idGenService: IdGenService) {
  }

  tasks: Task[] = [
    { id: this.idGenService.generateId(), title: 'Task 1', done: false },
    { id: this.idGenService.generateId(), title: 'Task 2', done: true }
  ];

  addTask(title: string): void {
    this.tasks.push({id: this.idGenService.generateId(), title, done: false});
  }

}
