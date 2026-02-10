import { Component } from '@angular/core';
import { PdfViewerModule } from 'ng2-pdf-viewer';
@Component({
  selector: 'app-resume',
  imports: [PdfViewerModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss',
})
export class ResumeComponent {
  resumeLink = 'Jake Richardson Resume.pdf';

  downloadResume() {
    const link = document.createElement('a');
    link.href = this.resumeLink;
    link.download = this.resumeLink;
    link.click();
  }
}
