import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
todos;
  constructor(
    private apiService: ApiService,
  ) { }

  ngOnInit() {
    this.todos = this.apiService.getProduct();
  }
}
