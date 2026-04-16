import { Component, input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { ISpaceNewsArticle } from '../../../../../model/ISpaceNews';

@Component({
  selector: 'app-space-news-article',
  imports: [DatePipe, MatButtonModule, MatCardModule, MatChipsModule],
  templateUrl: './space-news-article.html',
  styleUrl: './space-news-article.scss',
})
export class SpaceNewsArticle {
  news = input.required<ISpaceNewsArticle>();
}
