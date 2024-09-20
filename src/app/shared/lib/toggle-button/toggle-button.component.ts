import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'web-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.scss']
})
export class ToggleButtonComponent {
  @Input() on!: boolean;
  @Input() showLabels = true;
  @Input() leftText = 'Yes';
  @Input() rightText = 'No';
  @Output() changed = new EventEmitter<boolean>();

  // emit($event: any): void {
  //   this.on = $event;
  //   this.changed.emit($event);
  // }

  emit(event: Event) {
    const target = event.target as HTMLInputElement | null;
    if (target) {
      this.changed.emit(target.checked);
    }
  }
}
