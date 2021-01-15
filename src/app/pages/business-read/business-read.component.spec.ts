import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessReadComponent } from './business-read.component';

describe('BusinessReadComponent', () => {
  let component: BusinessReadComponent;
  let fixture: ComponentFixture<BusinessReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
