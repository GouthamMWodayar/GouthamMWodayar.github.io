import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Toolheader } from './toolheader/toolheader';
import { Sliderimage } from './sliderimage/sliderimage';
import { Cardex } from './cardex/cardex';
import { Srcabt } from './srcabt/srcabt';
import { Ourprd } from './ourprd/ourprd';
import { WhatsApp } from './whats-app/whats-app';
import { Footer } from './footer/footer';
import { QuickLinks } from './quick-links/quick-links';
import { Clients } from './clients/clients';
import { OurServices } from './our-services/our-services';
import { Quote } from './quote/quote';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Toolheader,Sliderimage,Cardex,Srcabt,Ourprd,WhatsApp,Footer,
    QuickLinks,Clients,OurServices,Quote
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'kiran-export';
}
