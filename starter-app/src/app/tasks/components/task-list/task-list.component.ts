import { Component, ViewEncapsulation, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Task, TaskListFilterType } from '../../models';

@Component({
  selector: 'mac-task-list',
  templateUrl: './task-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskListComponent {
  @Input() taskFilterTypes: TaskListFilterType[];
  @Input() activeTaskFilterType: TaskListFilterType;
  @Input() tasks: Task[];

  @Output() taskAdded = new EventEmitter<string>();
  @Output() taskUpdated = new EventEmitter<Task>();
  @Output() activeTaskFilterTypeChanged = new EventEmitter<TaskListFilterType>();

  activateFilterType(type: TaskListFilterType): void {
    this.activeTaskFilterTypeChanged.emit(type);
  }

  addTask(title: string): void {
    this.taskAdded.emit(title);
  }

  updateTask(task: Task) {
    this.taskUpdated.emit(task);
  }
}

