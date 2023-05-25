import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title="type";

  name!:string;
  date!:string;

  onNameChange(nameInput:string){
    this.name=nameInput;
  }

  onDateChange(dateInput:string){
    this.date=dateInput;
  }
}
