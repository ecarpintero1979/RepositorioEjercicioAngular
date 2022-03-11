import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyHeaderComponent } from './header/header.component';
import { MyFooterComponent } from './footer/footer.component';
import { MyBodyComponent } from './body/body.component';

import { TemperaturaService } from './temperatura.service';

@NgModule({
  declarations: [
    AppComponent,
    MyHeaderComponent,
    MyFooterComponent,
    MyBodyComponent,
  ],
  imports: [BrowserModule],
  providers: [TemperaturaService],
  bootstrap: [AppComponent],
})
export class AppModule {}
