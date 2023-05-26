import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HeaderService } from '../header.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements AfterViewInit{
  constructor(private header: HeaderService) {}

  ngAfterViewInit(): void {
    this.header.getHeader().setHomeActive();
  }
}
