import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  values: string[];

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.httpService.getValues().subscribe(val => this.values = val);
  }
}
