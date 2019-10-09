import { TestBed } from '@angular/core/testing';

import { InMemoryDatabaseService } from './in-memory-database.service';

describe('InMemoryDatabaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InMemoryDatabaseService = TestBed.get(InMemoryDatabaseService);
    expect(service).toBeTruthy();
  });
});
