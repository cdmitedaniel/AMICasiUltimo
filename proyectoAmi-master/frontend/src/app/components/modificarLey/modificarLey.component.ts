import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { LeyService } from '../../services/ley.service';
import { ArticuloService } from '../../services/articulo.service';

import { Ley } from '../../models/ley';
import { Articulo } from '../../models/articulo';

declare var M: any;

@Component({
  selector: 'app-modificarLey',
  templateUrl: './modificarLey.component.html',
  styleUrls: ['./modificarLey.component.css'],
  providers: [ LeyService,ArticuloService ]
})
export class ModificarLeyComponent implements OnInit {

  constructor(private leyService: LeyService, private articuloService: ArticuloService) { }
  
  ngOnInit() {
    this.getLeyes();
    this.getArticulos();
    
  }
  

  getLeyes() {
    this.leyService.getLeyes()
      .subscribe(res => {
        this.leyService.leyes = res as Ley[];
      });
  }

  editLey(ley: Ley) {
    this.leyService.selectedLey = ley;
  }

  deleteLey(_id: string, form: NgForm) {
    if (confirm('¿Esta seguro de eliminar?')) {
      this.leyService.deleteLey(_id)
        .subscribe(res => {
          this.getLeyes();
          this.resetForm(form);
          M.toast({ html: 'Eiminado' });
        });
    }
  }




  addArticulo(form?: NgForm) {
    console.log(form.value);
    if(form.value._id) {
      this.articuloService.putArticulo(form.value)
        .subscribe(res => {
          this.resetForm(form);
          this.getArticulos;
          M.toast({html: 'Articulo actualizado'});
        });
    } else {
      this.articuloService.postArticulo(form.value)
      .subscribe(res => {
        this.getArticulos();
        this.resetForm(form);
        M.toast({html: 'articulo Guardado'});
      });
    }
    
  }

  getArticulos() {
    this.articuloService.getArticulos()
      .subscribe(res => {
        this.articuloService.articulos = res as Articulo[];
      });
  }

  editArticulo(articulo: Articulo) {
    this.articuloService.selectedArticulo = articulo;
  }

  deleteArticulo(_id: string, form: NgForm) {
    if(confirm('¿Esta seguro de articulo?')) {
      this.articuloService.deleteArticulo(_id)
        .subscribe(res => {
          this.getArticulos();
          this.resetForm(form);
          M.toast({html: 'Eiminado'});
        });
    }
  }

    resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.leyService.selectedLey = new Ley();
    }
  }
}


