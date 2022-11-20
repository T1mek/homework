import { Component, Input, OnInit } from '@angular/core';
import { blogs } from '../../../data/blogs';
import { IBlog } from '../../../models/blog';

@Component({
  selector: 'our-blog',
  templateUrl: './our-blog.component.html',
  styleUrls: ['./our-blog.component.scss'],
})
export class OurBlogComponent implements OnInit {
  @Input()
  blog: IBlog[];
  constructor() {}

  ngOnInit(): void {}
}
