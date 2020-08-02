import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditscoreComponent } from './editscore.component';

describe('EditscoreComponent', () => {
  let component: EditscoreComponent;
  let fixture: ComponentFixture<EditscoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditscoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditscoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
