import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTotalCustomerComponent } from './view-total-customer.component';

describe('ViewTotalCustomerComponent', () => {
  let component: ViewTotalCustomerComponent;
  let fixture: ComponentFixture<ViewTotalCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTotalCustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewTotalCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
