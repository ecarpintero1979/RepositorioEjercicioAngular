import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyHeaderComponent } from './header/header.component';
import { MyFooterComponent } from './footer/footer.component';
import { MyBodyComponent } from './body/body.component';

@NgModule({
  declarations: [
    AppComponent,
    MyHeaderComponent,
    MyFooterComponent,
    MyBodyComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
