import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
   user:any;
   repos:any[];
   userName:string;

  constructor(private _gitHubService:GithubService) {
    /*this._gitHubService.getuser().subscribe(user => {
      //console.log(user);
      this.user = user;
    });
    this._gitHubService.getRepos().subscribe(repos => {
      this.repos = repos;
    });*/

    this.user = false;
   }
   
   searchUser(){
     this._gitHubService.updateUser(this.userName);


     this._gitHubService.getuser().subscribe(user => {
      this.user = user;
    });
    this._gitHubService.getRepos().subscribe(repos => {
      this.repos = repos;
    });
   }

  ngOnInit() {
  }

}
