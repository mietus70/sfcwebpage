import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo-loader',
  templateUrl: './logo-loader.component.html',
  styleUrls: ['./logo-loader.component.css']
})
export class LogoLoaderComponent implements OnInit {
  hidden = false;

  ngOnInit() {
    // Hide loader after 1.5s or when page loaded
    setTimeout(() => {
      this.hidden = true;
    }, 1500);
  }
}
