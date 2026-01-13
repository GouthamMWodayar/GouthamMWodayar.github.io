import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';



@Component({
  selector: 'app-sliderimage',
  imports: [MatTabsModule],
  templateUrl: './sliderimage.html',
  styleUrl: './sliderimage.scss',
})
export class Sliderimage {
selectedTab: string = 'home'; // Default selected tab

  tabs = [
    { value: 'home', name: 'Home', imgSrc: 'https://www.w3schools.com/images/w3schools_green.jpg', content: 'Welcome to the home tab content.' },
    { value: 'profile', name: 'Profile', imgSrc: 'https://www.w3schools.com/images/w3schools_green.jpg', content: 'User profile details here.' },
    { value: 'settings', name: 'Settings', imgSrc: 'https://www.w3schools.com/images/w3schools_green.jpg', content: 'Configure your settings.' }
  ]
 
}
