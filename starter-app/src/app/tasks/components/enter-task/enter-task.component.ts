import { Component, Output, ViewEncapsulation, EventEmitter } from '@angular/core';

@Component({
  selector: 'mac-enter-task',
  templateUrl: './enter-task.component.html',
  encapsulation: ViewEncapsulation.None
})
export class EnterTaskComponent {
  @Output() taskEntered = new EventEmitter<string>();

  enterTask(titleInput: HTMLInputElement) {
    this.taskEntered.emit(titleInput.value);
    titleInput.value = '';
    titleInput.focus();
  }
}
