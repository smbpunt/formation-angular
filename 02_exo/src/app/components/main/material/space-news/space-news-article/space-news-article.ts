import { Component, input } from '@angular/core';
import { ISpaceNewsArticle } from '../../../../../model/ISpaceNews';

@Component({
  selector: 'app-space-news-article',
  imports: [],
  templateUrl: './space-news-article.html',
  styleUrl: './space-news-article.scss',
})
export class SpaceNewsArticle {
  news = input.required<ISpaceNewsArticle>();
}
