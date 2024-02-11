import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../models/Item';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://localhost:7223/items'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  getData(): Observable<Item[]> {
    return this.http.get<Item[]>(this.apiUrl);
  }
}
