import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderItemListComponent } from './order-item-list.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, NO_ERRORS_SCHEMA } from '@angular/core';
import { Order } from 'src/app/shared/models/Order'

describe('OrderItemListComponent', () => {
  let component: OrderItemListComponent;
  let fixture: ComponentFixture<OrderItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [  ],
      declarations: [ OrderItemListComponent ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderItemListComponent);
    component = fixture.componentInstance;
    component.order = new Order(); // added to test
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
