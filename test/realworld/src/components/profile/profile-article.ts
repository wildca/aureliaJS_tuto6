import { inject } from '@aurelia/kernel';

import { getPages } from 'shared/get-pages';
import { Article } from 'shared/models/article';
import { ArticleService } from 'shared/services/article-service';

@inject(ArticleService)
export class ProfileArticle {
  public static parameters: string[] = ['name'];

  private articles: Article[] = [];
  private readonly pageNumber?: number;
  private totalPages?: number[];
  private currentPage = 1;
  private readonly limit = 10;
  private username?: string;

  public constructor(
    private readonly articleService: ArticleService,
  ) {}

  public enter(params: any) {
    this.username = params.name;
    return this.getArticles();
  }

  public async getArticles() {
    const queryParams = {
      author: this.username,
      limit: this.limit,
      offset: this.limit * (this.currentPage - 1),
    };
    const response = await this.articleService.getList('all', queryParams);
    this.articles = [...response.articles];
    this.totalPages = getPages(response.articlesCount, this.limit);
  }

  public async setPageTo(pageNumber: number) {
    this.currentPage = pageNumber;
    await this.getArticles();
  }
}
