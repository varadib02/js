import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  users = [
    {
      imageUrl: 'assets/man.jpg',
      username: 'Jozsi42',
      name: 'tóth józsef',
      residence: 'Pécs'
    },
    {
      imageUrl: 'assets/woman.jpg',
      username: 'Kata33',
      name: 'kiss kata',
      residence: 'Budapest'
    },
    {
      imageUrl: 'assets/woman2.jpg',
      username: 'Anna11',
      name: 'nagy anna',
      residence: 'Pécs'
    },
    {
      imageUrl: 'assets/man2.jpg',
      username: 'Pista14',
      name: 'erős istván',
      residence: 'Bonyhád'
    }
  ];
}
