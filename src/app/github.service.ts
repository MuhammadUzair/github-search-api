import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class GithubService {
  private userName:string;
  private client_id = 'b129cc781aa04f562127';
  private client_secret = '631a1f0a010d7efc98639ccddc9241f3f499f798';

  constructor(private _http: Http) {
    console.log('Github Service is ready..');
    this.userName="MuhammadUzair";
   }

   getuser(){
    return this._http.get('https://api.github.com/users/'+this.userName + '?client_id'+ this.client_id+'&client_secret'+this.client_secret)
    .map(res => res.json());
   }
  getRepos(){
    return this._http.get('https://api.github.com/users/'+this.userName + '/repos?client_id'+ this.client_id+'&client_secret'+this.client_secret)
    .map(res => res.json());
   }
   updateUser(userName:string){
    this.userName = userName;
   }

}
