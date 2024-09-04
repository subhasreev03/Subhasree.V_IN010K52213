import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgserviceComponent } from './ngservice.component';

describe('NgserviceComponent', () => {
  let component: NgserviceComponent;
  let fixture: ComponentFixture<NgserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgserviceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
