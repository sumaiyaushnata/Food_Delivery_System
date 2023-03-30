import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuplierSideberComponent } from './suplier-sideber.component';

describe('SuplierSideberComponent', () => {
  let component: SuplierSideberComponent;
  let fixture: ComponentFixture<SuplierSideberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuplierSideberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuplierSideberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
