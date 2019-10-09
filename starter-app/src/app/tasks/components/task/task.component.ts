import { Component, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../models';

@Component({
  selector: 'mac-task',
  templateUrl: './task.component.html',
  encapsulation: ViewEncapsulation.None
})
export class TaskComponent {
  @Input() task: Task;
  @Output() updated = new EventEmitter<Task>();

  updateTask(done: boolean): void {
    this.updated.emit({
      ...this.task,
      done
    });
  }
}
