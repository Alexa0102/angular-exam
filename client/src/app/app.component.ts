import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'exam';
  // constructor(private authService: AuthService){
  //   if(localStorage.getItem('token')){
  //     authService.getProfileData().subscribe()

  //   }
  // }
}
