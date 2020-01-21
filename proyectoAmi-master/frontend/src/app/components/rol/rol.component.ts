import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { RolService } from '../../services/rol.service';
import { Rol } from '../../models/rol';

declare var M: any;

@Component({
  selector: 'app-rol',
  templateUrl: './rol.component.html',
  styleUrls: ['./rol.component.css'],
  providers: [ RolService ]
})
export class RolComponent implements OnInit {

  constructor(public rolService: RolService) { }

  ngOnInit() {
    this.getRols();
  }

  addRol(form?: NgForm) {
    console.log(form.value);
    if(form.value._id) {
      this.rolService.putRol(form.value)
        .subscribe(res => {
          this.resetForm(form);
          this.getRols();
          M.toast({html: 'Cliente actualizado'});
        });
    } else {
      this.rolService.postRol(form.value)
      .subscribe(res => {
        this.getRols();
        this.resetForm(form);
        M.toast({html: 'Rol Guardado'});
      });
    }
    
  }

  getRols() {
    this.rolService.getRols()
      .subscribe(res => {
        this.rolService.rols = res as Rol[];
      });
  }

  editRol(rol: Rol) {
    this.rolService.selectedRol = rol;
  }

  deleteRol(_id: string, form: NgForm) {
    if(confirm('¿Esta seguro de eliminar?')) {
      this.rolService.deleteRol(_id)
        .subscribe(res => {
          this.getRols();
          this.resetForm(form);
          M.toast({html: 'Eiminado'});
        });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.rolService.selectedRol = new Rol();
    }
  }

}
