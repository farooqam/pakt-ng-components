import { Injectable } from '@angular/core';
import { LoggerService } from '../logger-service';

@Injectable({
  providedIn: 'root'
})
export class ConsoleLoggerService implements LoggerService {
  log(message: string): void {
    console.log(message);
  }

  logObject(o: any): void {
    console.log(o);
  }
}
