import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../Entity/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiURL = "http://localhost:8080/fds/user";
  
  private apiURL1 = "http://localhost:8080/fds/user";
  



  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient,private router:Router) { }
  addUser(data: User) {
    return this.httpClient.post(this.apiURL + '/posts', JSON.stringify(data), this.httpOptions,);
    
  }
  userLogin(data:User) {
    console.log("login ");
  return this.httpClient.get<User[]>(this.apiURL+`/login?userPhone=${data.user_phone}&password=${data.user_password}`,{observe:'response'}).subscribe((result:any)=>{
    if(result&& result.body){
      console.warn(result.body);
      localStorage.setItem('user',JSON.stringify(result.body))
      this.router.navigateByUrl("/")
      console.warn('login')
    }
  });
   }
   userAuthReload(){
    if(localStorage.getItem('user')){
      this.router.navigate(['/']);
    }
   }

}
