import { Component, ViewEncapsulation, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'mac-checkbox',
  templateUrl: './checkbox.component.html',
  encapsulation: ViewEncapsulation.None
})
export class CheckboxComponent {
  @Input() label: string;
  @Input() checked: boolean;
  @Output() changed = new EventEmitter<boolean>();

  check(checked: boolean) {
    this.changed.emit(checked);
  }
}
