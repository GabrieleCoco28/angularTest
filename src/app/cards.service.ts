import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor(private http: HttpClient) { }
  getCards() {
    return this.http.get<{img: string, title: string, description: string, link: string, web: boolean}[]>(
      '../assets/cards.json'
    );
  }
}
