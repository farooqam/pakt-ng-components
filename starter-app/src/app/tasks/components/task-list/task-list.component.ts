import { Component, ViewEncapsulation } from '@angular/core';
import * as uuid from 'uuid';

@Component({
  selector: 'mac-task-list',
  templateUrl: './task-list.component.html'
})
export class TaskListComponent {

  tasks = [
    { id: this.genId(), title: 'Task 1', done: false },
    { id: this.genId(), title: 'Task 2', done: true }
  ];

  addTask(title: string): void {
    this.tasks.push({id: this.genId(), title, done: false});
  }

  genId(): any {
    return uuid.v4();
  }
}
