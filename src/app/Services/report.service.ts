import { Injectable } from '@angular/core';
import { Report } from '../models/report.model';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private reports: Report[] = [];
  private readonly STORAGE_KEY = 'app_reports';

  constructor() {
    this.loadReports();
  }

  // Cargar reportes desde localStorage
  private loadReports(): void {
    const storedReports = localStorage.getItem(this.STORAGE_KEY);
    if (storedReports) {
      this.reports = JSON.parse(storedReports);
    }
  }

  // Guardar reportes en localStorage
  private saveReports(): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.reports));
  }

  getReports(): Report[] {
    return this.reports;
  }

  getReportById(id: string): Report | undefined {
    return this.reports.find(report => report.id === id);
  }

  addReport(report: Report): void {
    this.reports.push(report);
    this.saveReports();
  }

  deleteReport(id: string): void {
    this.reports = this.reports.filter(report => report.id !== id);
    this.saveReports();
  }
}