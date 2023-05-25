import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '05_22';
  name!:string;
  residence!:string;

  onuser(name:string,residence:string){
    this.name=name;
    this.residence =residence ;
  }
}
