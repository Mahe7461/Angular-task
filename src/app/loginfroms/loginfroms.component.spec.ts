import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginfromsComponent } from './loginfroms.component';

describe('LoginfromsComponent', () => {
  let component: LoginfromsComponent;
  let fixture: ComponentFixture<LoginfromsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginfromsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginfromsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
