import { Component, OnInit } from '@angular/core';

import { ISocial } from '../../../models/social';
import { socials } from '../../../data/socials';

@Component({
  selector: 'contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  social: ISocial[] = socials;
  constructor() {}

  ngOnInit(): void {}
}
