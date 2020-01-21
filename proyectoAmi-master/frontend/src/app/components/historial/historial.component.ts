import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HistorialService } from '../../services/historial.service';
import { Historial } from '../../models/historial';

declare var M: any;

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css'],
  providers: [ HistorialService ]
})
export class HistorialComponent implements OnInit {

  constructor(public historialService: HistorialService) { }

  ngOnInit() {
    this.getHistoriales();
  }

  addHistorial(form?: NgForm) {
    console.log(form.value);
    if (form.value._id) {
      this.historialService.putHistorial(form.value)
        .subscribe(res => {
          this.resetForm(form);
          this.getHistoriales();
          M.toast({ html: 'Historial de articulos actualizada' });
        });
    } else {
      this.historialService.postHistorial(form.value)
        .subscribe(res => {
          this.getHistoriales();
          this.resetForm(form);
          M.toast({ html: ' Historial de articulo Guardado' });
        });
    }

  }

  getHistoriales() {
    this.historialService.getHistoriales()
      .subscribe(res => {
        this.historialService.historiales = res as Historial[];
      });
  }

  editHistorial(historial: Historial) {
    this.historialService.selectedHistorial = historial;
  }

  deleteHistorial(_id: string, form: NgForm) {
    if (confirm('¿Esta seguro de eliminar?')) {
      this.historialService.deleteHistorial(_id)
        .subscribe(res => {
          this.getHistoriales();
          this.resetForm(form);
          M.toast({ html: 'Eliminado' });
        });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.historialService.selectedHistorial = new Historial();
    }
  }
}