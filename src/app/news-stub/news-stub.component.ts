import { Component, OnInit, Input } from '@angular/core';
import { Story } from '../interfaces/story';

@Component({
  selector: 'app-news-stub',
  templateUrl: './news-stub.component.html',
  styleUrls: ['./news-stub.component.css']
})
export class NewsStubComponent implements OnInit {

  @Input() story: Story;

  constructor() { }

  ngOnInit() {
  }

}
