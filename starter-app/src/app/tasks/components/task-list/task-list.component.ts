import { Component, ViewEncapsulation } from '@angular/core';
import { Task, TaskListFilterType } from '../../models';
import { TaskService } from '../../services/task.service';
import { LoggerService } from 'src/app/shared/utility';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'mac-task-list',
  templateUrl: './task-list.component.html',
  encapsulation: ViewEncapsulation.None
})
export class TaskListComponent {

  private tasks: Observable<Task[]>;
  tasksToShow: Observable<Task[]>;
  activeFilterType = new BehaviorSubject<TaskListFilterType>('all');
  taskFilterTypes: TaskListFilterType[] = ['all', 'open', 'done'];

  constructor(private taskService: TaskService, private logger: LoggerService) {
    this.tasks = taskService.getTasks();

    this.tasksToShow = combineLatest(this.tasks, this.activeFilterType)
      .pipe(
        map(([tasks, activeFilterType]) => {
          return tasks.filter((task: Task) => {
            if (activeFilterType === 'all') {
              return true;
            }

            if (activeFilterType === 'open') {
              return !task.done;
            }

            return task.done;
          });
        })
      );
  }

  activateFilterType(type: TaskListFilterType): void {
    this.activeFilterType.next(type);
  }

  addTask(title: string): void {
    this.taskService.addTask(title);
    this.logger.log(`Added task '${title}'`);
  }

  updateTask(task: Task) {
    this.taskService.updateTask(task);
    this.logger.log('Updated task:\n' + JSON.stringify(task));
  }
}

