import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryPagesComponent } from './history-pages.component';

describe('HistoryPagesComponent', () => {
  let component: HistoryPagesComponent;
  let fixture: ComponentFixture<HistoryPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryPagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
