import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePagesComponent } from './home-pages.component';

describe('HomePagesComponent', () => {
  let component: HomePagesComponent;
  let fixture: ComponentFixture<HomePagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
