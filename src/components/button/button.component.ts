import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ButtonMode } from 'src/enums';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() mode: ButtonMode = ButtonMode.Primary;
  @Input() disabled: boolean = false;
  @Output() onClick: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  handleClick() {
    this.onClick.emit();
  }

  getClassNames(): string {
    return `btn btn-${ButtonMode[this.mode].toLowerCase()}`;
  }
}
