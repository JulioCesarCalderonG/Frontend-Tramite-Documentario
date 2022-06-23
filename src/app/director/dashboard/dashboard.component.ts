import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
  ]
})
export class DashboardComponent implements OnInit {
  count: number = 0;
  constructor(private _router: Router, private _location: Location) { }

  ngOnInit(): void {
  }

  refresh(): void {
  }
}
