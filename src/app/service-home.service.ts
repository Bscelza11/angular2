import { Injectable } from '@angular/core';
import { cardItem } from './CardItem.model';
import { PostCardComponent } from './Shared/card-templates/Post-card/Post-card.component';
import { ProductCardComponent } from './Shared/card-templates/Product-card/Product-card.component';
import { QuoteCardComponent } from './Shared/card-templates/Quote-card/Quote-card.component';

@Injectable({
  providedIn: 'root'
})
export class ServiceHomeService {

  getAds() {
    return [
      new cardItem(ProductCardComponent, {
        title:'Money plant',
        description: 'It is considered as  a lucky plant which brings wealth, health, prosperity and happiness in the house.',
        img: 'https://vkflowerbees.com/wp-content/uploads/2022/03/money-plant.jpeg',
        price: 29,
      }),
      new cardItem(PostCardComponent, {
        title: 'Best indoor plants',
        author: 'Dayana Jabif',
        description: 'Discover the best 10 indoor plants to add color and interest to every room with our easy-to-follow guide. Full of expert tips as to which house plants will survive best in your home, you can banish any worries of green fingered failures for good.',
        date: '05/20/2022'
      }),
      new cardItem(QuoteCardComponent, {
      author:'Marcus Tullius Cicero',
      description: '"If you have a garden and a library, you have everything you need."'
      }), 
      new cardItem(ProductCardComponent, {
        title: 'Grey Pot',
        description: 'Give your plants and home a facelift with this ceramic plant pot.',
        img: 'https://www.ikea.com/us/en/images/products/persillade-plant-pot-dark-gray__0439713_pe592235_s5.jpg?f=xl',
        price: 22,
      }),
      new cardItem(QuoteCardComponent, {
        author: 'Walter Hagen',
        description: '"You’re only here for a short visit. Don’t hurry, don’t worry. And be sure to smell the flowers along the way."',
      }),
      new cardItem(QuoteCardComponent, {
        author: 'Audrey Hepburn',
        description: '"To plant a garden is to believe in tomorrow."',
      })
    ]
  }

  constructor() { }
}
