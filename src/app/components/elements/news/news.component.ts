/**
 * Created by Pawel Grzyb 01.04.2018
 *
 * This element shows recent posts.
 */
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  /**
   * A getter of the title.
   * @return {string}
   */
  get title(): string {
    return "News";
  }

  constructor() { }

  ngOnInit() {}

}
