import { Injectable } from '@angular/core';
import { initializeApp, getApps } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp, getDocs, query, orderBy, doc, updateDoc } from 'firebase/firestore';
import { firebaseConfig } from '../../../environments/environment.firebase';

@Injectable({ providedIn: 'root' })
export class FirestoreService {
  private db = this.initFirestore();

  private initFirestore() {
    if (getApps().length === 0) {
      initializeApp(firebaseConfig as any);
    }
    return getFirestore();
  }

  async addRequest(payload: any) {
    const docRef = await addDoc(collection(this.db, 'requests'), {
      ...payload,
      createdAt: serverTimestamp(),
      status: payload.status || 'new',
    });
    return docRef;
  }

  async listRequests() {
    const q = query(collection(this.db, 'requests'), orderBy('createdAt', 'desc'));
    const snap = await getDocs(q);
    return snap.docs.map((d: any) => ({ id: d.id, ...d.data() }));
  }

  async updateRequestStatus(id: string, status: string) {
    const d = doc(this.db, 'requests', id);
    await updateDoc(d, { status, updatedAt: serverTimestamp() });
  }
}
