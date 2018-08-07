import { Component, OnInit } from '@angular/core';
import{FacebookServiceService} from '../facebook-service.service';

@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrls: ['./show-detail.component.css']
})
export class ShowDetailComponent implements OnInit {

   userData:any;

  constructor(private facebookService:FacebookServiceService) { }

  ngOnInit() {
    this.userData=this.facebookService.getData();
  }

}
