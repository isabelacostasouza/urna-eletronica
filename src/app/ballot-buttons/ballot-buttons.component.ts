import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ballot-buttons',
  templateUrl: './ballot-buttons.component.html',
  styleUrls: ['./ballot-buttons.component.scss']
})
export class BallotButtonsComponent {

  @Output() button_clicked = new EventEmitter<string>();

  click_button(event: any) {
    this.button_clicked.emit(event);
  }

}
