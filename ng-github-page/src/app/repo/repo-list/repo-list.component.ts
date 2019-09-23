import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.scss']
})
export class RepoListComponent implements OnInit {
  repoListApiUrl = environment.getReposUrl();
  $repos = this.http.get(this.repoListApiUrl).pipe(mergeMap((repos) => this.$sort(repos, 'updated_at')));
  $sort = (list, prop) => of(list).pipe(map((repos) => repos.sort((a, b) => a[prop] > b[prop] ? -1 : 1)));

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

}
