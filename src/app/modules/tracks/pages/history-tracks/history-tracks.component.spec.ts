import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryTracksComponent } from './history-tracks.component';

describe('HistoryTracksComponent', () => {
  let component: HistoryTracksComponent;
  let fixture: ComponentFixture<HistoryTracksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryTracksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryTracksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
