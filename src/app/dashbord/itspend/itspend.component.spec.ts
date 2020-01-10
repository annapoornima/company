import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItspendComponent } from './itspend.component';

describe('ItspendComponent', () => {
  let component: ItspendComponent;
  let fixture: ComponentFixture<ItspendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItspendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItspendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
