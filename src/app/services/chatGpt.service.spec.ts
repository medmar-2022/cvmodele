/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ChatGptService } from './chatGpt.service';

describe('Service: ChatGpt', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChatGptService]
    });
  });

  it('should ...', inject([ChatGptService], (service: ChatGptService) => {
    expect(service).toBeTruthy();
  }));
});
