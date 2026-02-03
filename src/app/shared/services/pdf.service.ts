import { Injectable } from '@angular/core';
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';

@Injectable({ providedIn: 'root' })
export class PdfService {
  async generateBrochure(request: any) {
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([600, 800]);
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const { width, height } = page.getSize();
    const titleSize = 20;
    page.drawText('EgyWorkforce', { x: 40, y: height - 60, size: 18, font });
    page.drawText(`Request: ${request.id || ''}`, { x: 40, y: height - 90, size: 12, font });
    page.drawText(`Company: ${request.companyName || ''}`, { x: 40, y: height - 120, size: 12, font });
    page.drawText(`Email: ${request.email || ''}`, { x: 40, y: height - 140, size: 12, font });
    page.drawText(`Country: ${request.country || ''}`, { x: 40, y: height - 160, size: 12, font });
    page.drawText(`Project Type: ${request.projectType || ''}`, { x: 40, y: height - 180, size: 12, font });

    // crew table
    page.drawText('Required Crews:', { x: 40, y: height - 210, size: 12, font });
    const crews = request.requiredCrews || [];
    let y = height - 230;
    if (Array.isArray(crews)) {
      crews.forEach((c: any) => {
        page.drawText(`${c.type || 'Type'} - ${c.count || 0}`, { x: 60, y, size: 11, font });
        y -= 16;
      });
    } else {
      page.drawText(JSON.stringify(crews), { x: 60, y, size: 11, font });
    }

    page.drawText('Message:', { x: 40, y: y - 12, size: 12, font });
    page.drawText(request.message || '', { x: 40, y: y - 32, size: 11, font });

    const pdfBytes = await pdfDoc.save();
    return pdfBytes;
  }

  downloadPdf(bytes: Uint8Array, filename = 'brochure.pdf') {
    const blob = new Blob([bytes], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  }
}
