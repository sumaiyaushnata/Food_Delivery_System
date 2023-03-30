import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuplierFooterComponent } from './suplier-footer.component';

describe('SuplierFooterComponent', () => {
  let component: SuplierFooterComponent;
  let fixture: ComponentFixture<SuplierFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuplierFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuplierFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
