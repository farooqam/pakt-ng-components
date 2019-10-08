import { Injectable } from '@angular/core';
import { Task } from '../models';
import { IdGenService } from 'src/app/shared/utility';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks: Task[] = [
    { id: this.idGenService.generateId(), title: 'Task 1', done: false },
    { id: this.idGenService.generateId(), title: 'Task 2', done: true }
  ];

  constructor(private idGenService: IdGenService) { }

  getTasks(): Observable<Task[]> {
    return of(this.tasks);
  }

  addTask(title: string): void {
    this.tasks.push({id: this.idGenService.generateId(), title, done: false});
  }
}
