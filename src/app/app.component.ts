import { Component } from '@angular/core';
import { cardItem } from './CardItem.model';
import { ServiceHomeService } from './Service-home.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   adItem: cardItem[] = [];

   constructor(private serviceHome: ServiceHomeService) {}

   ngOnInit(){
    this.adItem = this.serviceHome.getAds();
   }


}
