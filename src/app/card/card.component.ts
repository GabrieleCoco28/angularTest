import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() card!: Card | undefined;
}
export interface Card {
  img: string,
  title: string,
  description: string,
  link: string,
  web: boolean
}
