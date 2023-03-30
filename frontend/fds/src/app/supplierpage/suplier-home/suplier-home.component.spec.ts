import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuplierHomeComponent } from './suplier-home.component';

describe('SuplierHomeComponent', () => {
  let component: SuplierHomeComponent;
  let fixture: ComponentFixture<SuplierHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuplierHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuplierHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
