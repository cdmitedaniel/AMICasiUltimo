import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ArticuloService } from '../../services/articulo.service';
import { Articulo } from '../../models/articulo';

declare var M: any;

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css'],
  providers: [ ArticuloService ]
})
export class ArticuloComponent implements OnInit {

  constructor(public articuloService: ArticuloService) { }

  ngOnInit() {
    this.getArticulos();
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
      this.articuloService.selectedArticulo = new Articulo();
    }
  }

}
