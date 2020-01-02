import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ItemService } from '../services/item.service';
import { Item } from '../models/item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  btn: any;
  save: string;
  item: Item;

  allItem: Item[];
  width: any;
  itm: any;

  constructor(
    public itemService: ItemService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}
  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      // id: [],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      birthdate: ['', Validators.required],
      designation: ['', Validators.required],
      address: ['', Validators.required]
    });
    this.getAllItem();
    // tslint:disable-next-line: no-unused-expression
    this.width !== 30;
  }

  getAllItem() {
    this.itemService.getAllItem().subscribe((data: Item[]) => {
      this.allItem = data;
    });
  }
  // to edit the employee details on left side component.
  editItem(itm: any) {
    this.itemService.currentItem = Object.assign({}, itm);
    this.getAllItem();
  }

  // to delete the employee ..
  deleteItem(id: any) {
    this.itemService.deleteItem(id).subscribe((data: Item) => {
      this.getAllItem();
    });
  }

  onSubmit(currentItem: Item) {
    // tslint:disable-next-line: no-debugger
    console.log(currentItem);
    if (currentItem.id != null) {
      this.updateItem(currentItem);
    } else {
      // tslint:disable-next-line: align
      this.createItem(currentItem);
    }
    {
      this.itemService.currentItem = {
        id: null,
        firstname: '',
        lastname: '',
        birthdate: null,
        designation: '',
        address: ''
      };
    }
    this.getAllItem();
  }
  createItem(itm: Item) {
    this.itemService.createItem(itm).subscribe();
  }
  updateItem(itm: Item) {
    this.itemService.updateItem(itm).subscribe();
  }
}
