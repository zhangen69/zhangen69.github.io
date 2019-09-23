import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.scss']
})
export class RepoListComponent implements OnInit {
  repoListApiUrl = environment.getReposUrl();
  $repos = this.http.get(this.repoListApiUrl);

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

}
