import { Component, ViewEncapsulation, Input } from '@angular/core';
import { Task } from '../../models';

@Component({
  selector: 'mac-task',
  templateUrl: './task.component.html',
  encapsulation: ViewEncapsulation.None
})
export class TaskComponent {
  @Input() task: Task;
}
