import { Component } from '@angular/core';
import { ArticleEnfant } from './article-enfant/article-enfant';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-article',
  imports: [ArticleEnfant, JsonPipe],
  templateUrl: './article.html',
  styleUrl: './article.scss',
})
export class Article {
  articles = [
    { nom: 'computer', like: 0, dislike: 0 },
    { nom: 'tv', like: 0, dislike: 0 },
    { nom: 'desk', like: 0, dislike: 0 },
    { nom: 'smartphone', like: 0, dislike: 0 },
  ];

  protected handleReaction(event: 'like' | 'dislike', nomArticle: string) {
    const article = this.articles.find((a) => a.nom === nomArticle);
    if (!article) return;
    article[event]++;
  }
}
