import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAddFoodComponent } from './view-add-food.component';

describe('ViewAddFoodComponent', () => {
  let component: ViewAddFoodComponent;
  let fixture: ComponentFixture<ViewAddFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAddFoodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAddFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
