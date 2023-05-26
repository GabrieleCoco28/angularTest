import { Injectable } from '@angular/core';
import { HeaderComponent } from './header/header.component';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private header!: HeaderComponent;
  constructor() { }
  setHeader(header: HeaderComponent): void {
    this.header = header;
  }
  getHeader(): HeaderComponent {
    return this.header;
  }
}
