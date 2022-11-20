import { Component, OnInit } from '@angular/core';
import { ISocial } from '../../../models/social';
import { socials } from '../../../data/socials';
import { IBlog } from '../../../models/blog';
import { blogs } from '../../../data/blogs';

@Component({
  selector: 'blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  blog: IBlog[] = blogs;
  ngOnInit(): void {}
}
