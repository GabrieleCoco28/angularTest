import { AfterViewInit, Component } from '@angular/core';
import { HeaderService } from '../header.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements AfterViewInit {
  constructor(private header: HeaderService) {}
  ngAfterViewInit(): void {
    this.header.getHeader().setContactActive();
  }
}
