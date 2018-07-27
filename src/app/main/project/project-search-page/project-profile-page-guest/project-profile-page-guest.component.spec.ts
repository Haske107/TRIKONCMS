import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectProfilePageGuestComponent } from './project-profile-page-guest.component';

describe('ProjectProfilePageGuestComponent', () => {
  let component: ProjectProfilePageGuestComponent;
  let fixture: ComponentFixture<ProjectProfilePageGuestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectProfilePageGuestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectProfilePageGuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
