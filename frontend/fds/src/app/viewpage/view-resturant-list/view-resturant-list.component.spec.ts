import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewResturantListComponent } from './view-resturant-list.component';

describe('ViewResturantListComponent', () => {
  let component: ViewResturantListComponent;
  let fixture: ComponentFixture<ViewResturantListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewResturantListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewResturantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
