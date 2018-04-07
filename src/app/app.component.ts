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

  addUser(target: HTMLInputElement) {
    const name = target.value;
    target.value = null;
    const id = this.db.createId();
    this.db
      .collection('users')
      .doc(id)
      .set({ id, name });
  }

  editUser(name: string, id: string) {
    this.db
      .collection('users')
      .doc(id)
      .update({ name });
  }
}
