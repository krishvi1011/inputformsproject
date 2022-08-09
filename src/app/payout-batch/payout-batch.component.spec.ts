import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayoutBatchComponent } from './payout-batch.component';

describe('PayoutBatchComponent', () => {
  let component: PayoutBatchComponent;
  let fixture: ComponentFixture<PayoutBatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayoutBatchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayoutBatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
