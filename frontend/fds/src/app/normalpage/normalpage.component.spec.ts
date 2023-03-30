import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalpageComponent } from './normalpage.component';

describe('NormalpageComponent', () => {
  let component: NormalpageComponent;
  let fixture: ComponentFixture<NormalpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NormalpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NormalpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
