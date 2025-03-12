import { Component, OnInit } from '@angular/core';
import { CameraService } from '../../Services/camera.service';
import { ReportService } from '../../Services/report.service';
import { Report } from '../../models/report.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-report',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-report.component.html',
  styleUrls: ['./add-report.component.css']
})
export class AddReportComponent implements OnInit {
  status: string = 'Activo'; // Valor por defecto
  id: string = '';
  description: string = '';
  technician: string = '';
  photo: string | null = null;
  errorMessage: string = '';

  constructor(
    private cameraService: CameraService,
    private reportService: ReportService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  // Método para tomar una foto
  async takePhoto(): Promise<void> {
    this.photo = await this.cameraService.takePicture();
  }

  // Método para guardar el reporte
  saveReport(): void {
    if (this.id && this.description && this.technician && this.photo) {
      const newReport: Report = {
        id: this.id,
        description: this.description,
        technician: this.technician,
        photo: this.photo,
        date: new Date().toLocaleString(),  // Fecha actual
        status: this.status
      };
      this.reportService.addReport(newReport);
      // Navegar a la lista de reportes después de guardar
      this.router.navigate(['/report-list']);
    } else {
      // Mostrar mensaje de error
      this.errorMessage = "Por favor, complete todos los campos y tome una foto.";
      setTimeout(() => {
        this.errorMessage = "";
      }, 3000);
    }
  }
}
