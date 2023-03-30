import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuplierOrderListComponent } from './suplier-order-list.component';

describe('SuplierOrderListComponent', () => {
  let component: SuplierOrderListComponent;
  let fixture: ComponentFixture<SuplierOrderListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuplierOrderListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuplierOrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
