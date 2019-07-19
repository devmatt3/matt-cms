import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth : AngularFireAuth) { }

  public login(user: User) {
    this.auth.auth.signInWithEmailAndPassword(user.email, user.password)
    .catch(function(error){
      var errorCode = error.code;
      console.log(errorCode);
    });
  }

  public createUser(user: User){
    this.auth.auth.createUserWithEmailAndPassword(user.email, user.password)
    .catch(function(error) {
      var errorCode = error.code;
      console.log(errorCode);
    });
  }
}
