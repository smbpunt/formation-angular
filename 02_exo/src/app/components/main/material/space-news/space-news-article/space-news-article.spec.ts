import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceNewsArticle } from './space-news-article';

describe('SpaceNewsArticle', () => {
  let component: SpaceNewsArticle;
  let fixture: ComponentFixture<SpaceNewsArticle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpaceNewsArticle],
    }).compileComponents();

    fixture = TestBed.createComponent(SpaceNewsArticle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
