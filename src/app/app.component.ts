import { AngularFirestore } from 'angularfire2/firestore';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private db: AngularFirestore) {
    db
      .collection('users')
      .add({
        name: 'Juan Herrera',
        twitter: '@jdjuan',
      })
      .then(() => {
        alert('Added successfully!');
      });
  }
}
