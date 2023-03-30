import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuplierDeshboardComponent } from './suplier-deshboard.component';

describe('SuplierDeshboardComponent', () => {
  let component: SuplierDeshboardComponent;
  let fixture: ComponentFixture<SuplierDeshboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuplierDeshboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuplierDeshboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
