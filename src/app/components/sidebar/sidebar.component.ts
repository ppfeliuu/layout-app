import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
 
})
export class SidebarComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;
  
  constructor() { 
    document.addEventListener("click", this.handleMousePos);
  }

  ngOnInit(): void {
  }

  public closeNav() {    
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.backgroundColor = "white";    
  }

  openNav() {    
    document.getElementById("mySidenav").style.width = "250px";    
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";

  }

  close(reason: string) {    
    this.sidenav.close();
  }

  handleMousePos(event) {
    var mouseClickWidth = event.clientX;
    if(mouseClickWidth>=250){
      document.getElementById("mySidenav").style.width = "0";
      document.body.style.backgroundColor = "white";       
    }
  }

}
