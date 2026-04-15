import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-article-enfant',
  imports: [],
  templateUrl: './article-enfant.html',
  styleUrl: './article-enfant.scss',
})
export class ArticleEnfant {
  article = input.required<string>();
  reaction = output<'like' | 'dislike'>();
}
