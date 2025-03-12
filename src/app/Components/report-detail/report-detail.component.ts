import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReportService } from '../../Services/report.service';
import { Report } from '../../models/report.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-report-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './report-detail.component.html',
  styleUrls: ['./report-detail.component.css']
})
export class ReportDetailComponent implements OnInit {
  report: Report | undefined;

  constructor(
    private route: ActivatedRoute,
    private reportService: ReportService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.report = this.reportService.getReportById(id);
    }
  }

  deleteReport(): void {
    if (this.report) {
      this.reportService.deleteReport(this.report.id);
      this.router.navigate(['/report-list']);
    }
  }

  goBack(): void {
    this.router.navigate(['/report-list']);
  }

  // En src/app/Components/report-detail/report-detail.component.ts
toggleStatus(): void {
  if (this.report) {
    this.reportService.toggleReportStatus(this.report.id);
    // Actualizamos el reporte local para mostrar el cambio inmediatamente
    this.report = this.reportService.getReportById(this.report.id);
  }
}

}
