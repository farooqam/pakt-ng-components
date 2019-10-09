import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Task } from '../../models';
import { TaskService } from '../../services/task.service';
import { LoggerService } from 'src/app/shared/utility';


@Component({
  selector: 'mac-task-list',
  templateUrl: './task-list.component.html'
})
export class TaskListComponent implements OnInit {

  private tasks: Task[];

  constructor(private taskService: TaskService, private logger: LoggerService) {}

  ngOnInit(): void {
    this.taskService.getTasks()
      .subscribe(tasks => {
        this.tasks = tasks;
        this.logger.logObject(this.tasks);
      },
      error => this.logger.logObject(error));
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
