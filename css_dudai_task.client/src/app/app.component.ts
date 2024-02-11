import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface Item {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {


  title = 'css_dudai_task.client';
}
