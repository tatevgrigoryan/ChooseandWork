import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from "@angular/common/http";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-userDetails',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})




export class UserDetailsComponent implements OnInit {
  item: any;
  list = [];
  listUserId : number;
  status: boolean = false;


  private routeSub: Subscription;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router) {

  }

  showSidebar() {
    this.status = !this.status;
  }


  ngOnInit(): void {

    // Get user ID from URL params
    this.routeSub = this.route.params.subscribe(params => {
      this.listUserId = params['id']
    });

    this.http.get(' https://api.github.com/users')
      .subscribe(Response => {
        console.log(Response)
        this.item = Response[this.listUserId - 1];
      });
  }

}
