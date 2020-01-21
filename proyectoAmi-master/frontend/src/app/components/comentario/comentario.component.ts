import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ComentarioService } from '../../services/comentario.service';
import { Comentario } from '../../models/comentario';

declare var M: any;

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.css'],
  providers: [ ComentarioService ]
})
export class ComentarioComponent implements OnInit {

  constructor(public comentarioService: ComentarioService) { }

  ngOnInit() {
    this.getComentarios();
  }

  addComentario(form?: NgForm) {
    console.log(form.value);
    if(form.value._id) {
      this.comentarioService.putComentario(form.value)
        .subscribe(res => {
          this.resetForm(form);
          this.getComentarios();
          M.toast({html: 'comentario actualizado'});
        });
    } else {
      this.comentarioService.postComentario(form.value)
      .subscribe(res => {
        this.getComentarios();
        this.resetForm(form);
        M.toast({html: 'comentario Guardado'});
      });
    }
    
  }

  getComentarios() {
    this.comentarioService.getComentarios()
      .subscribe(res => {
        this.comentarioService.comentarios = res as Comentario[];
      });
  }

  editComentario(comentario: Comentario) {
    this.comentarioService.selectedComentario = comentario;
  }

  deleteComentario(_id: string, form: NgForm) {
    if(confirm('¿Esta seguro de eliminar?')) {
      this.comentarioService.deleteComentario(_id)
        .subscribe(res => {
          this.getComentarios();
          this.resetForm(form);
          M.toast({html: 'Eiminado'});
        });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.comentarioService.selectedComentario = new Comentario();
    }
  }

}
