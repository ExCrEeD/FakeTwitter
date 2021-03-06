import { Component, OnInit } from '@angular/core';
import { Observable, empty } from 'rxjs';
import { Tweets } from '../Model/tweet';
import { User } from '../Model/user';
import { TweetService } from '../Services/tweet.service';
import { FollowerService } from '../Services/follower.service';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public tweets = true;
  public followers = false;
  public tweets$: Observable<Tweets>;
  public followers$: Observable<User>;
  public username;
  private user;
  public changeInfo=false; 
  
  constructor(private tweetService: TweetService, 
    private followerService: FollowerService,public userService: UserService ) { 
    this.user = userService.getUserId();
    this.username = userService.getUserName();
    this.getTweets();
    this.getFollower();
  }

  ngOnInit(): void {
  }

  public changeComponent(componente){
    this.tweets = false;
    this.followers = false;
    this.changeInfo=false;

    switch (componente) {
      case 'tweets': {
        this.tweets = true;
        break;
      }
      case 'followers':{
        this.followers = true;
        break;
      }
      case'change-info':{
        this.changeInfo=true;
        break;
      }
    } 
  }

  async getTweets() {
    this.tweets$ = this.tweetService.ObtenerTweetsPorUsuario(this.user);
  }

  async getFollower(){
    this.followers$ = this.followerService.getFollowers(this.user);
  }

}
