import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuplierHeaderComponent } from './suplier-header.component';

describe('SuplierHeaderComponent', () => {
  let component: SuplierHeaderComponent;
  let fixture: ComponentFixture<SuplierHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuplierHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuplierHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
