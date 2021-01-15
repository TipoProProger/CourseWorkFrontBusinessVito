import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBusinessListComponent } from './user-business-list.component';

describe('UserBusinessListComponent', () => {
  let component: UserBusinessListComponent;
  let fixture: ComponentFixture<UserBusinessListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserBusinessListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBusinessListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
