import { Component, Input, OnInit } from '@angular/core';
import { Test } from '../model';

@Component({
  selector: 'app-test-details',
  templateUrl: './test-details.component.html',
  styleUrls: ['./test-details.component.css'],
})
export class TestDetailsComponent implements OnInit {
  @Input() test: Test | undefined;

  constructor() {}

  ngOnInit(): void {}
}
