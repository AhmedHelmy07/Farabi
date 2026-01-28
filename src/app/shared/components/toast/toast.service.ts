import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface ToastMessage {
  id: string;
  type: 'success' | 'error' | 'info';
  text: string;
  timeout?: number;
}

@Injectable({ providedIn: 'root' })
export class ToastService {
  private toastsSubject = new BehaviorSubject<ToastMessage[]>([]);
  readonly toasts$ = this.toastsSubject.asObservable();

  private get toasts() {
    return this.toastsSubject.value;
  }

  show(text: string, type: ToastMessage['type'] = 'info', timeout = 5000) {
    const id = Math.random().toString(36).slice(2, 9);
    const msg: ToastMessage = { id, type, text, timeout };
    this.toastsSubject.next([...this.toasts, msg]);
    if (timeout && timeout > 0) {
      setTimeout(() => this.dismiss(id), timeout);
    }
    return id;
  }

  dismiss(id: string) {
    this.toastsSubject.next(this.toasts.filter((t) => t.id !== id));
  }
}
