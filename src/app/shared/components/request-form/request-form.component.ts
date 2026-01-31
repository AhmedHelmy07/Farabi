import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FirestoreService } from '../../services/firestore.service';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-request-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl:'./request-form.component.html',
  styleUrls: ['./request-form.component.scss']
})
export class RequestFormComponent {
  companyName = '';
  country = '';
  email = '';
  projectType = '';
  requiredCrews = '';
  message = '';
  submitting = false;
  successMessage = '';
  errorMessage = '';
  constructor(private firestoreService: FirestoreService, private notify: NotificationService) {}

  async submit() {
    this.errorMessage = '';
    this.successMessage = '';
    if (!this.companyName || !this.email) {
      this.errorMessage = 'Company name and email are required.';
      return;
    }
    this.submitting = true;
    try {
      const payload: any = {
        companyName: this.companyName,
        country: this.country || null,
        email: this.email,
        projectType: this.projectType || null,
        requiredCrews: this.parseRequiredCrews(this.requiredCrews),
        message: this.message || null,
        status: 'new'
      };
      const docRef = await this.firestoreService.addRequest(payload);
      this.successMessage = `Request sent (id: ${docRef.id}). We will contact you.`;
      this.notify.success(this.successMessage);
      this.companyName = this.country = this.email = this.projectType = this.requiredCrews = this.message = '';
    } catch (e: any) {
      console.error(e);
      this.errorMessage = 'Failed to send request.';
      this.notify.error(this.errorMessage);
    } finally {
      this.submitting = false;
    }
  }

  private parseRequiredCrews(input: string) {
    // simple parser: expect JSON or plain number
    try {
      if (!input) return null;
      const trimmed = input.trim();
      if (trimmed.startsWith('{') || trimmed.startsWith('[')) return JSON.parse(trimmed);
      const n = Number(trimmed);
      if (!Number.isNaN(n)) return [{ type: 'Standard', count: n }];
      return [{ type: 'Standard', count: 1 }];
    } catch {
      return [{ type: 'Standard', count: 1 }];
    }
  }
}
