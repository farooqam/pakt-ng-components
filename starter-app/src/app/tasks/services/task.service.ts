import { Injectable } from '@angular/core';
import { Task } from '../models';
import { LoggerService } from 'src/app/shared/utility';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks = new BehaviorSubject<Task[]>([]);

  constructor(private http: HttpClient, private logger: LoggerService) {
    this.loadTasks();
  }

  private loadTasks(): void {
    this.http.get('api/tasks')
      .subscribe((tasks: Task[]) => this.tasks.next(tasks));
  }

  getTasks(): Observable<Task[]> {
    return this.tasks.asObservable();
  }

  addTask(title: string): Subscription {
    return this.http.post<Task>('api/tasks', {title, done: false})
      .subscribe(() => this.loadTasks());
  }

  updateTask(task: Task): Subscription {
    return this.http.put<Task>(`api/tasks/${task.id}`, task)
      .subscribe(() => this.loadTasks());
  }
}
