import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistSearchPageComponent } from './artist-search-page.component';

describe('ArtistSearchPageComponent', () => {
  let component: ArtistSearchPageComponent;
  let fixture: ComponentFixture<ArtistSearchPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistSearchPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistSearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
