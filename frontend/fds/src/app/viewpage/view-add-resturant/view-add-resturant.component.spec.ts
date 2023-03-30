import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAddResturantComponent } from './view-add-resturant.component';

describe('ViewAddResturantComponent', () => {
  let component: ViewAddResturantComponent;
  let fixture: ComponentFixture<ViewAddResturantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAddResturantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAddResturantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
