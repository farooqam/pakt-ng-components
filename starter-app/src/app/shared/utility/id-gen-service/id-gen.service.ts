import { Injectable } from '@angular/core';
import * as uuid from 'uuid';
import { IdGenServiceOptions } from './id-gen-service-options';

@Injectable({
  providedIn: 'root'
})
export class IdGenService {

  generateId(options?: IdGenServiceOptions): any {
    return uuid.v4();
  }
}
