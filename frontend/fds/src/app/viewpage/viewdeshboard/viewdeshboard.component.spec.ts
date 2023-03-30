import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdeshboardComponent } from './viewdeshboard.component';

describe('ViewdeshboardComponent', () => {
  let component: ViewdeshboardComponent;
  let fixture: ComponentFixture<ViewdeshboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewdeshboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewdeshboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
