import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirestoreService } from '../../../shared/services/firestore.service';
import { PdfService } from '../../../shared/services/pdf.service';
import { ToastService } from '../../../shared/components/toast/toast.service';

@Component({
  selector: 'app-admin-requests',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss']
})
export class AdminRequestsComponent implements OnInit {
  requests: any[] = [];
  loading = false;

  constructor(private fs: FirestoreService, private pdf: PdfService, private toast: ToastService) {}

  async ngOnInit() {
    await this.load();
  }

  async load() {
    this.loading = true;
    this.requests = await this.fs.listRequests();
    this.loading = false;
  }

  async downloadBrochure(r: any) {
    const bytes = await this.pdf.generateBrochure(r);
    this.pdf.downloadPdf(bytes, `brochure-${r.id || 'req'}.pdf`);
    this.toast.show('Brochure generated', 'success');
  }

  async setStatus(r: any, status: string) {
    await this.fs.updateRequestStatus(r.id, status);
    this.toast.show('Status updated', 'info');
    await this.load();
  }
}
