import { Component } from '@angular/core';
import { AppServiceService } from './app-service.service';
import { Test } from './model';
import { TEST } from './Test';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular-Dependency-Injection';

  tests: Test[] = [];

  constructor(private appService: AppServiceService) {
    this.getTest();
  }

  ngOnInit(): void {
    this.getTest();
  }

  getTest(): void {
    this.appService.getTests().subscribe((data) => {
      this.tests = data;
    });
  }
}
