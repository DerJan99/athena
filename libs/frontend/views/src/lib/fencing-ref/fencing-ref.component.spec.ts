import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FencingRefComponent} from './fencing-ref.component';

describe('FencingRefComponent', () => {
  let component: FencingRefComponent;
  let fixture: ComponentFixture<FencingRefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FencingRefComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FencingRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
