import { Injectable } from '@angular/core';
import { ToastService } from '../components/toast/toast.service';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  constructor(private toastService: ToastService) {}

  success(message: string) {
    if (this.toastService) {
      this.toastService.show(message, 'success');
    } else {
      console.log('SUCCESS:', message);
      alert(message);
    }
  }

  error(message: string) {
    if (this.toastService) {
      this.toastService.show(message, 'error');
    } else {
      console.error('ERROR:', message);
      alert(message);
    }
  }
}
