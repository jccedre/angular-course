import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'username-input',
  templateUrl: './username-input.component.html',
  styleUrls: ['./username-input.component.scss']
})
export class UsernameInputComponent implements OnInit {
  allowUsernameReset = false;
  username = '';

  constructor() {
    (this.username === '') ? this.allowUsernameReset = false : this.allowUsernameReset = true;
  }

  ngOnInit() {
  }

  onUpdateUsername(value) {
    this.username = value;

    (this.username === '') ? this.allowUsernameReset = false : this.allowUsernameReset = true;
  }

  onUsernameReset() {
    this.username = '';
    this.allowUsernameReset = false;
  }
}
