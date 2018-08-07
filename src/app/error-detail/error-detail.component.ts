import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FacebookServiceService } from '../facebook-service.service';
import { FacebookLoginProvider, AuthService } from 'angular-6-social-login';

@Component({
  selector: 'app-error-detail',
  templateUrl: './error-detail.component.html',
  styleUrls: ['./error-detail.component.css']
})
export class ErrorDetailComponent implements OnInit {

  constructor(private socialauthService: AuthService, private facebookService: FacebookServiceService,private router:Router) { }

    public socialSignIn(socialPlateForm:string){
      let socialPlateFormProvider;
      if(socialPlateForm == "facebook"){
        socialPlateFormProvider = FacebookLoginProvider.PROVIDER_ID;
      }
      this.socialauthService.signIn(socialPlateFormProvider).then(
        (userData)=>{
          console.log(socialPlateForm+ "sign in data: " ,userData);
          this.facebookService.setData(userData);
          this.router.navigate(['/showDetail'])
        }
      )

    }
  ngOnInit() {
  }

}
