import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Test } from './model';
import { TEST } from './Test';

@Injectable({
  providedIn: 'root',
})
export class AppServiceService {
  Tests: Test[] = TEST;

  constructor() {}

  getTests(): Observable<Test[]> {
    return of(this.Tests);
  }

  getMessage(): string {
    return 'Learning Angular Service';
  }
}
