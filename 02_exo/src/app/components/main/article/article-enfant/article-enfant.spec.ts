import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleEnfant } from './article-enfant';

describe('ArticleEnfant', () => {
  let component: ArticleEnfant;
  let fixture: ComponentFixture<ArticleEnfant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleEnfant],
    }).compileComponents();

    fixture = TestBed.createComponent(ArticleEnfant);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
