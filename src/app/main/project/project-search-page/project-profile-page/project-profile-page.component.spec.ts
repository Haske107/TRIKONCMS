import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectProfilePageComponent } from './project-profile-page.component';

describe('ProjectProfilePageComponent', () => {
  let component: ProjectProfilePageComponent;
  let fixture: ComponentFixture<ProjectProfilePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectProfilePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
