import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Task } from '../../models';
import { TaskService } from '../../services/task.service';


@Component({
  selector: 'mac-task-list',
  templateUrl: './task-list.component.html'
})
export class TaskListComponent implements OnInit {

  private tasks: Task[];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks()
      .subscribe(tasks => {
        this.tasks = tasks;
      },
      error => console.log(error));
  }

  addTask(title: string): void {
    this.taskService.addTask(title);
  }
}
