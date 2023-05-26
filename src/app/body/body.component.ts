import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HeaderService } from '../header.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements AfterViewInit{
  constructor(private header: HeaderService) {}
  helloWorld: string = "Hello World!"
  ngAfterViewInit(): void {
    this.header.getHeader().setHomeActive();
  }
}
