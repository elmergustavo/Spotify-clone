import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryAuthComponent } from './history-auth.component';

describe('HistoryAuthComponent', () => {
  let component: HistoryAuthComponent;
  let fixture: ComponentFixture<HistoryAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryAuthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
