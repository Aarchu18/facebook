import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{SocialLoginModule,FacebookLoginProvider,AuthServiceConfig} from 'angular-6-social-login';
import { AppComponent } from './app.component';
import { ShowDetailComponent } from './show-detail/show-detail.component';
import { ErrorDetailComponent } from './error-detail/error-detail.component';
import{FacebookServiceService} from './facebook-service.service';
import{Routes,RouterModule} from '@angular/router';

export function getAuthServiceconfigs(){
  let config= new AuthServiceConfig([
    {
       id:FacebookLoginProvider.PROVIDER_ID,
       provider:new FacebookLoginProvider("259662418182264")
    }
  ]);
  return config;

}
const routes: Routes=[{
  path:'',
  component:ErrorDetailComponent
},
  {
    path:"showDetail",
    component:ShowDetailComponent

  }

]
@NgModule({
  declarations: [
    AppComponent,
    ShowDetailComponent,
    ErrorDetailComponent
  ],
  imports: [
    BrowserModule,
    SocialLoginModule,
    RouterModule.forRoot(routes)
  ],
  providers: [FacebookServiceService,
    {
      provide:AuthServiceConfig,
      useFactory:getAuthServiceconfigs
    }
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
