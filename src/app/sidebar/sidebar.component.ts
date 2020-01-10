import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  Profibility(){
    this.router.navigate(['/Profibility']);
  }
  Resources(){
    this.router.navigate(['/Resources']);
    }
    Itspend(){
      this.router.navigate(['/Itspend']);
    }
    Procurement(){
      this.router.navigate(['/Procurement'])
    }
    Retail(){
      this.router.navigate(['/Retail'])
    }
    Sale(){
      this.router.navigate(['/Sale'])
    }
}
