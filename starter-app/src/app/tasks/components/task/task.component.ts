import { Component, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'mac-task',
  templateUrl: './task.component.html',
  encapsulation: ViewEncapsulation.None
})
export class TaskComponent {

  @Input() task: any;
}
