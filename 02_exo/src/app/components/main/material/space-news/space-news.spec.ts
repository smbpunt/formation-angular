import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceNews } from './space-news';

describe('SpaceNews', () => {
  let component: SpaceNews;
  let fixture: ComponentFixture<SpaceNews>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpaceNews],
    }).compileComponents();

    fixture = TestBed.createComponent(SpaceNews);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
