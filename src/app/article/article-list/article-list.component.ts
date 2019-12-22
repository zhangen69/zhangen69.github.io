import { Component, OnInit } from '@angular/core';
import * as data from 'src/assets/data/article.json';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {
  articles: any[] = (data as any).default;

  constructor() { }

  ngOnInit() {
    console.log(this.articles);
  }

}
