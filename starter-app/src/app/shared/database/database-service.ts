import { Injectable } from '@angular/core';
import { CreateDatabaseOptions } from './database-options';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class DatabaseService {
  abstract createDatabase(options?: CreateDatabaseOptions): Observable<any>;
}
