import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomText="Ezt a szöveget kel leirnod";
  enteredText='';

  onInput(value:string){
    console.log(value);
    this.enteredText=value;

  }

  compare(randomLetter:string,enteredLetter:string){
    if(!enteredLetter){
      return 'pending';
    }
    return randomLetter===enteredLetter ? 'correct' : 'incorrect';
  }
}
