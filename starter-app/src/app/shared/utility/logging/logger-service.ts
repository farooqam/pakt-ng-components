import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export abstract class LoggerService {
  abstract log(message: string): void;
  abstract logObject(o: any): void;
}
