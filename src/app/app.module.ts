import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { AppServiceService } from './app-service.service';
import { TestDetailsComponent } from './test-details/test-details.component';

@NgModule({
  declarations: [AppComponent, TestComponent, TestDetailsComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [AppServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
