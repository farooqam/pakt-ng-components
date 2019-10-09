import { Injectable } from '@angular/core';
import { Task } from '../models';
import { IdGenService, LoggerService } from 'src/app/shared/utility';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks: Task[] = [
    { id: this.idGenService.generateId(), title: 'Task 1', done: false },
    { id: this.idGenService.generateId(), title: 'Task 2', done: true }
  ];

  constructor(private idGenService: IdGenService, private logger: LoggerService) { }

  getTasks(): Observable<Task[]> {
    return of(this.tasks);
  }

  addTask(title: string): void {
    this.tasks.push({id: this.idGenService.generateId(), title, done: false});
  }

  updateTask(task: Task): void {
    const index = this.tasks.findIndex(t => task.id === t.id);

    if (index === -1) {
      this.logger.log('Task could not be updated (not found):\n'+ JSON.stringify(task));
      throw new Error(`Did not find the task '${task.title}'`);
    }

    this.tasks[index] = task;
  }
}
