import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectSearchPageComponent } from './project-search-page.component';

describe('ProjectSearchPageComponent', () => {
  let component: ProjectSearchPageComponent;
  let fixture: ComponentFixture<ProjectSearchPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectSearchPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectSearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
