import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LongJumpComponent} from './long-jump.component';

describe('LongJumpComponent', () => {
  let component: LongJumpComponent;
  let fixture: ComponentFixture<LongJumpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LongJumpComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LongJumpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
