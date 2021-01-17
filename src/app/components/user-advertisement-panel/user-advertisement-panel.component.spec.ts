import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAdvertisementPanelComponent } from './user-advertisement-panel.component';

describe('UserAdvertisementPanelComponent', () => {
  let component: UserAdvertisementPanelComponent;
  let fixture: ComponentFixture<UserAdvertisementPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAdvertisementPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAdvertisementPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
