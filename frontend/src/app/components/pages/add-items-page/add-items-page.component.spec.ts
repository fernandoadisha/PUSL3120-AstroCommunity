import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AddItemsPageComponent } from './add-items-page.component';

describe('AddItemsPageComponent', () => {
  let component: AddItemsPageComponent;
  let fixture: ComponentFixture<AddItemsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule],
      declarations: [ AddItemsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddItemsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
