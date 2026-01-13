import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-ourprd',
  imports: [MatButtonModule],
  templateUrl: './ourprd.html',
  styleUrl: './ourprd.scss',
})
export class Ourprd {
cards = [
    { title: 'Millets', description: 'Premium, nutrient-packed millets sourced from trusted farms, offering healthy and sustainable options.',pic:'1.jpg' },
    { title: 'Fresh Cut Flowers', description: 'Beautiful, carefully selected flowers, grown to ensure exceptional freshness and enduring elegance.' ,pic:'1.jpg'},
    { title: 'Mangoes', description: 'Farm-fresh fruits, perfectly ripened and carefully delivered for superior flavor, freshness, and exceptional quality.',pic:'1.jpg' },
    // { title: 'Card 4', description: 'Description 4' ,pic:'1.jpg'},
    // { title: 'Card 5', description: 'Description 5',pic:'1.jpg' },
    // { title: 'Card 6', description: 'Description 6',pic:'1.jpg' }
  ];
}
