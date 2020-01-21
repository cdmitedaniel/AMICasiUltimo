import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { InteraccionService } from '../../services/interaccion.service';
import { Interaccion } from '../../models/interaccion';

declare var M: any;

@Component({
  selector: 'app-interaccion',
  templateUrl: './interaccion.component.html',
  styleUrls: ['./interaccion.component.css'],
  providers: [InteraccionService]
})
export class InteraccionComponent implements OnInit {

  constructor(public interaccionService: InteraccionService) { }

  ngOnInit() {
    this.getInteraccions();
  }

  addInteraccion(form?: NgForm) {
    console.log(form.value);
    if (form.value._id) {
      this.interaccionService.putInteraccion(form.value)
        .subscribe(res => {
          this.resetForm(form);
          this.getInteraccions();
          M.toast({ html: 'interaccion actualizada' });
        });
    } else {
      this.interaccionService.postInteraccion(form.value)
        .subscribe(res => {
          this.getInteraccions();
          this.resetForm(form);
          M.toast({ html: 'interaccion Guardado' });
        });
    }

  }

  getInteraccions() {
    this.interaccionService.getInteraccions()
      .subscribe(res => {
        this.interaccionService.interaccions = res as Interaccion[];
      });
  }

  editInteraccion(interaccion: Interaccion) {
    this.interaccionService.selectedInteraccion = interaccion;
  }

  deleteInteraccion(_id: string, form: NgForm) {
    if (confirm('¿Esta seguro de eliminar?')) {
      this.interaccionService.deleteInteraccion(_id)
        .subscribe(res => {
          this.getInteraccions();
          this.resetForm(form);
          M.toast({ html: 'Eiminado' });
        });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.interaccionService.selectedInteraccion = new Interaccion();
    }
  }


}
