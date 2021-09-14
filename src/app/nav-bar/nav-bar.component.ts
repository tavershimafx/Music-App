import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  closeResult: string

  constructor() { }

  ngOnInit(): void {

    window.addEventListener('scroll', function(){
      let header = document.querySelector('header')
      header.classList.toggle('sticky', window.scrollY > 0)
    })

  }
}
