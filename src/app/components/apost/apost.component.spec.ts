import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApostComponent } from './apost.component';

describe('ApostComponent', () => {
  let component: ApostComponent;
  let fixture: ComponentFixture<ApostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
