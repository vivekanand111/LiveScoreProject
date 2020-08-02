import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevmatchesComponent } from './prevmatches.component';

describe('PrevmatchesComponent', () => {
  let component: PrevmatchesComponent;
  let fixture: ComponentFixture<PrevmatchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrevmatchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrevmatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
