/**
 * Created by Paweł Grzyb 01.04.2018
 *
 * Element shows newest posts.
 */
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  /**
   * Element title getter
   * @return {string}
   */
  get title(): string {
    return "News";
  }

  constructor() { }

  ngOnInit() {}

}
