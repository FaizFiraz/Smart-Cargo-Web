import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forbidden-page',
  templateUrl: './forbidden-page.component.html',
  styleUrls: ['./forbidden-page.component.css']
})
export class ForbiddenPageComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }

  goToHome(){
    this._router.navigate(['/']);
  }

}
