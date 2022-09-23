import { Component, OnInit } from '@angular/core';
import { LinkInterface, createLink } from '../utils/ob-generator';

const links: LinkInterface[] = [
  createLink('Home','home'),
  createLink('Powers','powers'),
  createLink('Heroes','heroes'),
  createLink('Teams','teams'),
  createLink('Stories', 'stories')
];

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  links: LinkInterface[]

  constructor() { 
    this.links = links;
  }

  ngOnInit(): void {
  }

}
