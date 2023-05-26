import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderService } from '../header.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements AfterViewInit{
  constructor(private route: ActivatedRoute, private header: HeaderService) {}
  ngAfterViewInit(): void {
    this.header.getHeader().setAboutActive();
  }
}
