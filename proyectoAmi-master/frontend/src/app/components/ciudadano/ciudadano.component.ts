import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CiudadanoService } from '../../services/ciudadano.service';
import { Ciudadano } from '../../models/ciudadano';

declare var M: any;

@Component({
  selector: 'app-ciudadano',
  templateUrl: './ciudadano.component.html',
  styleUrls: ['./ciudadano.component.css'],
  providers: [ CiudadanoService ]
})
export class CiudadanoComponent implements OnInit {

  constructor(public ciudadanoService: CiudadanoService) { }

  ngOnInit() {
    this.getCiudadanos();
  }

  addCiudadano(form?: NgForm) {
    console.log(form.value);
    if(form.value._id) {
      this.ciudadanoService.putCiudadano(form.value)
        .subscribe(res => {
          this.resetForm(form);
          this.getCiudadanos();
          M.toast({html: 'ciudadano actualizado'});
        });
    } else {
      this.ciudadanoService.postCiudadano(form.value)
      .subscribe(res => {
        this.getCiudadanos();
        this.resetForm(form);
        M.toast({html: 'ciudadano Guardado'});
      });
    }
    
  }

  getCiudadanos() {
    this.ciudadanoService.getCiudadanos()
      .subscribe(res => {
        this.ciudadanoService.ciudadanos = res as Ciudadano[];
      });
  }

  editCiudadano(ciudadano: Ciudadano) {
    this.ciudadanoService.selectedCiudadano = ciudadano;
  }

  deleteCiudadano(_id: string, form: NgForm) {
    if(confirm('¿Esta seguro de eliminar?')) {
      this.ciudadanoService.deleteCiudadano(_id)
        .subscribe(res => {
          this.getCiudadanos();
          this.resetForm(form);
          M.toast({html: 'Eiminado'});
        });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.ciudadanoService.selectedCiudadano = new Ciudadano();
    }
  }

}
