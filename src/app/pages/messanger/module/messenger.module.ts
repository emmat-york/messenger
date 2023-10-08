import { NgModule } from "@angular/core";
import { MessengerComponent } from "../messenger.component";
import { HeaderModule } from "../components/header/module/header.module";
import { RouterOutlet } from "@angular/router";

@NgModule({
    declarations: [MessengerComponent],
    imports: [HeaderModule, RouterOutlet],
})
export class MessengerModule {}
