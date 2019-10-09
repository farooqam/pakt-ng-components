import { 
  Component, 
  OnInit, 
  ViewEncapsulation, 
  Output, 
  Input, 
  EventEmitter } from '@angular/core';

@Component({
  selector: 'mac-toggle',
  templateUrl: './toggle.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ToggleComponent implements OnInit {
  @Input() buttonLabels: string[];
  @Input() activeButtonLabel: string;
  @Output() activated = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
    if (!this.activeButtonLabel) {
      this.activeButtonLabel = this.buttonLabels[0];
    }
  }

  activate(buttonLabel: string) {
    this.activated.emit(buttonLabel);
  }

}
