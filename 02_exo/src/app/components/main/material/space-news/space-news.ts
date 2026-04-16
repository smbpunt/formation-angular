import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs';
import { MatGridListModule } from '@angular/material/grid-list';
import { SpaceNewsStaticService } from '../../../../services/space-news-static-service';
import { ISpaceNewsArticle } from '../../../../model/ISpaceNews';
import { SpaceNewsArticle } from './space-news-article/space-news-article';

@Component({
  selector: 'app-space-news',
  imports: [MatGridListModule, SpaceNewsArticle],
  templateUrl: './space-news.html',
  styleUrl: './space-news.scss',
})
export class SpaceNews {
  staticNewsService = inject(SpaceNewsStaticService);
  news: ISpaceNewsArticle[] = this.staticNewsService.findAll();

  #breakpointObserver = inject(BreakpointObserver);

  cols = toSignal(
    this.#breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.Small])
      .pipe(
        map(({ breakpoints }) => {
          if (breakpoints[Breakpoints.XSmall]) return 1;
          if (breakpoints[Breakpoints.Small]) return 2;
          return 3;
        }),
      ),
    { initialValue: 3 },
  );
}
