import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsViewerComponent } from './cards-viewer.component';

describe('CardsViewerComponent', () => {
  let component: CardsViewerComponent;
  let fixture: ComponentFixture<CardsViewerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardsViewerComponent]
    });
    fixture = TestBed.createComponent(CardsViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
