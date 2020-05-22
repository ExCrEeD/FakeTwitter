import { Component, OnInit } from '@angular/core';
import { Observable, empty } from 'rxjs';
import { Tweets } from '../Model/tweet';
import { TweetService } from '../Services/tweet.service';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  public allTweets$: Observable<Tweets>;

  constructor(
    public userService: UserService,
    private tweetService: TweetService
  ) {
    this.getAllTweets();
  }

  ngOnInit(): void {}

  async getAllTweets() {
    this.allTweets$ = this.tweetService.ObtenerTodosLosTweets();
  }
}
