import { AngularFirestore } from 'angularfire2/firestore';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  messages$: Observable<any[]>;

  constructor(private db: AngularFirestore) {
    this.messages$ = db.collection('messages').valueChanges();
  }

  addMessage(input: HTMLInputElement) {
    const id = this.db.createId();
    const value = input.value;
    this.db
      .collection('messages')
      .doc(id)
      .set({ id, value });
    input.value = null;
  }

  editMessage(newValue: string, id: string) {
    this.db
      .collection('messages')
      .doc(id)
      .update({ value: newValue });
  }
}
