import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent    {
  themeColor:boolean = false;



  changeTheme () {
    this.themeColor = !this.themeColor;
    let body = document.getElementById("body");
    body.classList.toggle("darkMode");
  }

}
