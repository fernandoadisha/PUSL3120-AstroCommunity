import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-add-items-page',
  templateUrl: './add-items-page.component.html',
  styleUrls: ['./add-items-page.component.css']
})
export class AddItemsPageComponent implements OnInit {
  itemRegisterForm!: FormGroup;
  isSubmitted = false;

  constructor(private formBuilder: FormBuilder, itemService:ItemService) {}

  ngOnInit(): void {
    this.itemRegisterForm = this.formBuilder.group({

    })
  }

}
