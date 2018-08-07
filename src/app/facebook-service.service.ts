import { Injectable } from '@angular/core';
import { getViewData } from '@angular/core/src/render3/instructions';

@Injectable({
  providedIn: 'root'
})
export class FacebookServiceService {

  constructor() { }
  data:any;
  getData():any{
    return this .data;
    
  }
  setData(data){
    this.data=data;
  }
}
