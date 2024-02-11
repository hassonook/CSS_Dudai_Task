import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Item } from '../models/Item';


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  data: Item[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe((result) => {
        this.data = result;
      });
  }
}
