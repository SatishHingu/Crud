import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item';
import { Router } from '@angular/router';
import { ItemService } from '../services/item.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  allItem: Item[];
  width: any;
  itm: any;

  constructor(
    public itemService: ItemService,
    private router: Router,
    private formbuilder: FormBuilder
  ) {}

  ngOnInit() {
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
}
