import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-srcabt',
  imports: [MatIconModule,MatButtonModule],
  templateUrl: './srcabt.html',
  styleUrl: './srcabt.scss',
})
export class Srcabt {
titles = [
    { title: 'Affordable Prices', description: 'Trusted Farm-to-Export Network' ,icon:'double_arrow'},
    { title: 'Expert Team', description: 'Seamless Global Logistics' ,icon:'double_arrow'},
    { title: 'Sustainable Practices', description: 'Commitment to Quality & Sustainability',icon:'double_arrow' },
    
  ];
}
