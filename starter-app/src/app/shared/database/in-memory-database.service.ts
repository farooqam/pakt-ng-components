import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { IdGenService } from '../utility';
import { Task } from 'src/app/tasks/models';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDatabaseService implements InMemoryDbService {

  constructor(private idGenService: IdGenService) {}

  createDb(): any {
    const tasks: Task[] = [
      { id: 1, title: 'Task 1', done: false },
      { id: 2, title: 'Task 2', done: true }
    ];

    return {tasks};
  }

}
