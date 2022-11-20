import { Component, Input, OnInit } from '@angular/core';
import { IBlog } from '../../../models/blog';

@Component({
  selector: 'blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss'],
})
export class BlogsComponent implements OnInit {
  @Input()
  blog: IBlog[];
  constructor() {}

  ngOnInit(): void {}
}
