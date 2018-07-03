import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { SuccessAlertComponent } from './successAlert/successalert.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { UsernameInputComponent } from './username-input/username-input.component';
import { ButtonComponent } from './button/button.component';
import { ParagraphComponent } from './paragraph/paragraph.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    SuccessAlertComponent,
    WarningAlertComponent,
    UsernameInputComponent,
    ButtonComponent,
    ParagraphComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
