import { Component, Input, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { Test } from '../model';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  message: string = '';

  tests!: Test[];
  selectedTest: Test | undefined;

  constructor(private appService: AppServiceService) {}

  onSelect(test: Test): void {
    this.selectedTest = test;
  }

  getMessage(): void {
    this.message = this.appService.getMessage();
  }

  ngOnInit(): void {
    this.getMessage();
    this.getTest();
  }

  getTest(): void {
    this.appService.getTests().subscribe((data) => {
      this.tests = data;
    });
  }
}
