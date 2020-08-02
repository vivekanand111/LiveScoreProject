import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishmatchComponent } from './finishmatch.component';

describe('FinishmatchComponent', () => {
  let component: FinishmatchComponent;
  let fixture: ComponentFixture<FinishmatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinishmatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishmatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
