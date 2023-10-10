import { NgModule } from '@angular/core';
import { HistoryComponent } from '../components/history/history.component';
import { MainComponent } from '../main.component';
import { InputComponent } from '../components/input/input.component';
import { ContactsComponent } from '../components/contacts/contacts.component';

@NgModule({
  declarations: [
    MainComponent,
    ContactsComponent,
    HistoryComponent,
    InputComponent,
  ],
})
export class MainModule {}
