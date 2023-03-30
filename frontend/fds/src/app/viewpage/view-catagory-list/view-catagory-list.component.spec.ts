import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCatagoryListComponent } from './view-catagory-list.component';

describe('ViewCatagoryListComponent', () => {
  let component: ViewCatagoryListComponent;
  let fixture: ComponentFixture<ViewCatagoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCatagoryListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCatagoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
