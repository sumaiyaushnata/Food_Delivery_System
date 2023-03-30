import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFoodListComponent } from './view-food-list.component';

describe('ViewFoodListComponent', () => {
  let component: ViewFoodListComponent;
  let fixture: ComponentFixture<ViewFoodListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewFoodListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewFoodListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
