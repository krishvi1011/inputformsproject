import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantinvoiceComponent } from './merchantinvoice.component';

describe('MerchantinvoiceComponent', () => {
  let component: MerchantinvoiceComponent;
  let fixture: ComponentFixture<MerchantinvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerchantinvoiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MerchantinvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
