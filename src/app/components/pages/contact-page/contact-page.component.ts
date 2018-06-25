import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kontakt-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {
  lat: number = 51.546224;
  lng: number = 21.878854;
  zoom: number = 17;

  constructor() {}

  ngOnInit() {
  }

}
