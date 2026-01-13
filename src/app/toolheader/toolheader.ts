import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-toolheader',
  imports: [MatToolbarModule,MatButtonModule,MatIconModule],
  templateUrl: './toolheader.html',
  styleUrl: './toolheader.scss',
})
export class Toolheader {
menu = [
  {
    title: 'Home',
    children: []
  },
  {
    title: 'About',
    children: []
  },
  {
    title: 'Products▼',
    children: ['Cat A', 'Cat B']
  },
  {
    title: 'Contact Us',
    children: []
  },
];

scrollToTarget(): void {
    const element = document.getElementById('quote');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }


}
