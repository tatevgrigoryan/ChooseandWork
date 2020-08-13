import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-userList',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})


export class UserListComponent implements OnInit {
  item: any;
  length:number;
  list = [];
  searchText;
  page = 1;
  pageSize =10;


  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {

    this.http.get(' https://api.github.com/users')
      .subscribe(Response => {
        console.log(Response)
        this.item = Response;
        console.log(this.item.length)
      });
  }

}
