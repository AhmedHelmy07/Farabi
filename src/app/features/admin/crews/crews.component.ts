import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../../shared/services/firestore.service';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-admin-crews',
  imports: [CommonModule, TranslateModule],
  templateUrl: './crews.component.html',
  styleUrls: ['./crews.component.scss']
})
export class AdminCrewsComponent implements OnInit {
  crews: any[] = [];
  loading = false;

  // form
  name = '';
  composition = '';
  editingId: string | null = null;

  constructor(private fs: FirestoreService) {}

  async ngOnInit() {
    await this.load();
  }

  async load() {
    this.loading = true;
    this.crews = await this.fs.listCrews();
    this.loading = false;
  }

  async save() {
    const payload = { name: this.name, composition: this.parseComposition(this.composition) };
    if (this.editingId) {
      await this.fs.updateCrew(this.editingId, payload);
    } else {
      await this.fs.addCrew(payload);
    }
    this.resetForm();
    await this.load();
  }

  parseComposition(text: string) {
    try { return JSON.parse(text); } catch(e) { return { text }; }
  }

  edit(c: any) {
    this.editingId = c.id;
    this.name = c.name;
    this.composition = JSON.stringify(c.composition || {}, null, 2);
  }

  async remove(c: any) {
    if (!confirm('Delete crew?')) return;
    await this.fs.deleteCrew(c.id);
    await this.load();
  }

  resetForm() {
    this.editingId = null;
    this.name = '';
    this.composition = '';
  }
}
