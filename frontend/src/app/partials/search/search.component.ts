import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//import { Router } from 'express'; // even though this added express router, this actucally need the angualr router module

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchTerm = '';
  constructor(activateRoute:ActivatedRoute, private router:Router) {
    activateRoute.params.subscribe((params) =>{
      if(params.searchTerm) {
        this.searchTerm = params.searchTerm;
      }
    });
  }

  ngOnInit(): void {
  }

  search(term:string):void {
    if(term){
      this.router.navigateByUrl('/search/' + term)
    }
  }

}
