import { AfterContentInit, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderService } from '../header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  
  @ViewChild('home') home!: ElementRef<HTMLElement>;
  @ViewChild('about') about!: ElementRef<HTMLElement>;
  @ViewChild('contact') contact!: ElementRef<HTMLElement>;

  constructor(private route: ActivatedRoute, private headerService: HeaderService ) {
    this.headerService.setHeader(this);
  }

  setHomeActive() {
    this.home.nativeElement.style.color = "white";
    this.about.nativeElement.style.color = "gray";
    this.contact.nativeElement.style.color = "gray";
  }
  setAboutActive() {
    this.home.nativeElement.style.color = "gray";
    this.about.nativeElement.style.color = "white";
    this.contact.nativeElement.style.color = "gray";
  }
  setContactActive() {
    this.home.nativeElement.style.color = "gray";
    this.about.nativeElement.style.color = "gray";
    this.contact.nativeElement.style.color = "white";
  }
}