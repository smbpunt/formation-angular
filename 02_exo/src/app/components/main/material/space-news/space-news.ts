import { Component, inject } from '@angular/core';
import { SpaceNewsStaticService } from '../../../../services/space-news-static-service';
import { ISpaceNewsArticle } from '../../../../model/ISpaceNews';
import { SpaceNewsArticle } from './space-news-article/space-news-article';

@Component({
  selector: 'app-space-news',
  imports: [SpaceNewsArticle],
  templateUrl: './space-news.html',
  styleUrl: './space-news.scss',
})
export class SpaceNews {
  staticNewsService = inject(SpaceNewsStaticService);
  news: ISpaceNewsArticle[] = this.staticNewsService.findAll();
}
