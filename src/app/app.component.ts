import { Component } from '@angular/core';
import { Router ,NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'company';

  headershow:boolean= true;

  constructor(private router:Router) {
    //console.log(localStorage.getItem('username'));
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if ( event['url'] =='/register' || event['url'] =='/Login') {
          this.headershow = false;
        } else {
          // console.log("NU")
          this.headershow = true;
        }
      }
    });
  }

}
