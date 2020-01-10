import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
Username:any;
app:boolean;
  constructor(private router:Router) { }

  ngOnInit() {
    this.Username= localStorage.getItem("Username");
    if (this.Username!== null){
      this.app=true;
    }else{
      this.app=false;
    }
  }
  logout(){
    localStorage.removeItem("Username");
    console.log(localStorage.removeItem("Username"));
    this.router.navigate(['/Login']);
  }

}
