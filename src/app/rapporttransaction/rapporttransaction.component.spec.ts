import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RapporttransactionComponent } from './rapporttransaction.component';

describe('RapporttransactionComponent', () => {
  let component: RapporttransactionComponent;
  let fixture: ComponentFixture<RapporttransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RapporttransactionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RapporttransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
