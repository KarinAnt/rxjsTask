import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeinComponent } from './mein.component';

describe('MeinComponent', () => {
  let component: MeinComponent;
  let fixture: ComponentFixture<MeinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
