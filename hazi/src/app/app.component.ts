import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';

  posts = [
    {
      title: 'Fehér Kenyér',
      imageUrl: 'assets/1kenyer.jpg',
      type: 'Étel',
      content: 'Nagyon finam a kenyér'
    },
    {
      title: 'Lisztes Kenyér',
      imageUrl: 'assets/2kenyer.jpg',
      type: 'Étel',
      content: 'Lisztel megszórt kör alaku kenyér'
    },
    {
      title: 'Szeletelt Kenyér',
      imageUrl: 'assets/3kenyer.jpg',
      type: 'Étel',
      content: '...'
    },
  ];
}

