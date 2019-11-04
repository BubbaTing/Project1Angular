import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketOptionComponent } from './ticket-option.component';

describe('TicketOptionComponent', () => {
  let component: TicketOptionComponent;
  let fixture: ComponentFixture<TicketOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
