import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { OrderService } from './order.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('OrderService', () => {
  let service: OrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      declarations: [
        //HttpClientTestingModule
      ]
    });
    service = TestBed.inject(OrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
