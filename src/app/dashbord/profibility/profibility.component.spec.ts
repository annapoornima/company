import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfibilityComponent } from './profibility.component';

describe('ProfibilityComponent', () => {
  let component: ProfibilityComponent;
  let fixture: ComponentFixture<ProfibilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfibilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
