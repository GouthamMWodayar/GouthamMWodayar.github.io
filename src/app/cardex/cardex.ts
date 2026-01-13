import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-cardex',
  imports: [MatIconModule],
  templateUrl: './cardex.html',
  styleUrl: './cardex.scss',
})
export class Cardex {
 cards = [
    { title: 'Affordable Prices', description: 'Quality gardening and landscaping services at competitive, fair rates.' ,icon:'currency_rupee_circle'},
    { title: 'Expert Team', description: 'Skilled professionals dedicated to crafting stunning outdoor spaces.' ,icon:'support_agent'},
    { title: 'Sustainable Practices', description: 'Eco-friendly solutions that enhance beauty and protect nature.',icon:'eco' },
    { title: 'Customer Focus', description: 'Prioritizing client satisfaction with personalized, attentive service.',icon:'groups_3' }
  ];
}
