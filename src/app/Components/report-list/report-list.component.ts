import { Component, OnInit } from '@angular/core';
import { ReportService } from '../../Services/report.service';
import { Router } from '@angular/router';  // Asegúrate de importar Router
import { CommonModule } from '@angular/common';
import { Report } from '../../models/report.model';

@Component({
  selector: 'app-report-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.css']
})
export class ReportListComponent implements OnInit {
  reports: Report[] = [];

  constructor(
    private reportService: ReportService,
    private router: Router  // Asegúrate de inyectar el Router aquí
  ) {}

  ngOnInit(): void {
    this.reports = this.reportService.getReports();
  }

  // Ver detalles del reporte
  viewDetails(id: string): void {
    this.router.navigate([`/report-detail/${id}`]);
  }

  // Eliminar un reporte
  deleteReport(id: string): void {
    this.reportService.deleteReport(id);
    this.reports = this.reportService.getReports(); // Actualiza la lista
  }

  // Navegar a la página de agregar reporte
  goToAddReport(): void {
    this.router.navigate(['/add-report']);
  }

  navigateToAddReport(): void {
    this.router.navigate(['/add-report']);
  }
  
}
