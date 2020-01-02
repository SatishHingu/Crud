import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
posts: any;
  constructor(
    private apiService: ApiService,
  ) { }

  ngOnInit() {
    this.posts = this.apiService.getContact();
  }

}
