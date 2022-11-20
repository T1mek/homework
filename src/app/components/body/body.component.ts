import { Component, Input, OnInit } from '@angular/core';
import { ISocial } from '../../../models/social';

@Component({
  selector: 'body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent implements OnInit {
  @Input()
  social: ISocial[];

  constructor() {}

  ngOnInit(): void {}
}
