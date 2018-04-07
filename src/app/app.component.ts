import { AngularFirestore } from 'angularfire2/firestore';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  users$;

  constructor(private db: AngularFirestore) {
    this.users$ = db.collection('users').valueChanges();
  }

  addUser(name: string) {
    this.db.collection('users').add({ name });
  }
}
