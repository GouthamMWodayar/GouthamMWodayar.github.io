import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-quick-links',
  imports: [MatGridListModule],
  templateUrl: './quick-links.html',
  styleUrl: './quick-links.scss',
})
export class QuickLinks {
items = ['Apple', 'Banana', 'Orange'];
qc= ['Home', 'About', 'Contact'];

}
