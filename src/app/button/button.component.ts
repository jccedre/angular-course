import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styles: [`
    .font--white {
      color: white;
    }
  `]
})
export class ButtonComponent implements OnInit {
  buttonToggle = true;
  count = 0;
  buttonClicks = [];

  constructor() {
    this.buttonToggle = true;
    this.count = 0;
  }

  ngOnInit() {
  }

  onButtonClick() {
    this.buttonToggle = !this.buttonToggle;
    this.buttonClicks.push(++this.count);
  }

  getButtonClicks() {
    return this.buttonClicks;
  }

  getColor(index) {
    return index >= 5 ? 'blue' : 'white';
  }

}
