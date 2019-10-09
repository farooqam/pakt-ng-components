import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Task, TaskListFilterType } from '../../models';
import { TaskService } from '../../services/task.service';
import { LoggerService } from 'src/app/shared/utility';

@Component({
  selector: 'mac-task-list',
  templateUrl: './task-list.component.html'
})
export class TaskListComponent implements OnInit {

  private tasks: Task[];
  private tasksToShow: Task[];
  private activeFilterType: TaskListFilterType = 'all';
  private taskFilterTypes: TaskListFilterType[] = ['all', 'open', 'done'];

  constructor(private taskService: TaskService, private logger: LoggerService) {}

  ngOnInit(): void {
    this.taskService.getTasks()
      .subscribe(tasks => {
        this.tasks = tasks;
        this.logger.logObject(this.tasks);
      },
      error => this.logger.logObject(error));

      this.filterTasks();
  }

  addTask(title: string): void {
    this.taskService.addTask(title);
    this.logger.log(`Added task '${title}'`);
    this.filterTasks();
  }

  updateTask(task: Task) {
    this.taskService.updateTask(task);
    this.logger.log('Updated task:\n' + JSON.stringify(task));
    this.filterTasks();
  }

  activateFilterType(type: TaskListFilterType): void {
    this.activeFilterType = type;
    this.filterTasks();
  }

  filterTasks(): void {
    this.tasksToShow = this.tasks
      .filter((task: Task) => {
        if (this.activeFilterType === 'all') {
          return true;
        }

        if (this.activeFilterType === 'open') {
          return !task.done;
        }

        return task.done;
      });
  }
}
