import { Injectable } from '@angular/core';
import { Report } from '../models/report.model';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private reports: Report[] = [];

  constructor() {}

  getReports(): Report[] {
    return this.reports;
  }

  getReportById(id: string): Report | undefined {
    return this.reports.find(report => report.id === id);
  }

  addReport(report: Report): void {
    this.reports.push(report);
  }

  deleteReport(id: string): void {
    this.reports = this.reports.filter(report => report.id !== id);
  }
}
