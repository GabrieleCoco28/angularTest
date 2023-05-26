import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CardsService } from '../cards.service';

@Component({
  selector: 'app-cards-viewer',
  templateUrl: './cards-viewer.component.html',
  styleUrls: ['./cards-viewer.component.css']
})
export class CardsViewerComponent {
  cards!: Observable<{img: string, title: string, description: string, link: string, web: boolean}[]>;
  constructor(private cardsService: CardsService) {}
  ngOnInit(): void {
    this.cards = this.cardsService.getCards();
  }
}
