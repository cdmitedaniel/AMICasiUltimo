import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { PublicacionleyService } from '../../services/publicacionley.service';
import { Publicacionley } from '../../models/publicacionLey';

declare var M: any;

@Component({
  selector: 'app-publicacionley',
  templateUrl: './publicacionley.component.html',
  styleUrls: ['./publicacionley.component.css'],
  providers: [ PublicacionleyService ]
})
export class PublicacionleyComponent implements OnInit {

  constructor(public publicacionleyService: PublicacionleyService) { }

  ngOnInit() {
    this.getPublicacionleys();
  }

  addPublicacionley(form?: NgForm) {
    console.log(form.value);
    if(form.value._id) {
      this.publicacionleyService.putPublicacionley(form.value)
        .subscribe(res => {
          this.resetForm(form);
          this.getPublicacionleys();
          M.toast({html: 'Publicacion de ley actualizado'});
        });
    } else {
      this.publicacionleyService.postPublicacionley(form.value)
      .subscribe(res => {
        this.getPublicacionleys();
        this.resetForm(form);
        M.toast({html: 'publicacion de ley Guardado'});
      });
    }
    
  }

  getPublicacionleys() {
    this.publicacionleyService.getPublicacionleys()
      .subscribe(res => {
        this.publicacionleyService.publicacionleys = res as Publicacionley[];
      });
  }

  editPublicacionley(publicacionley: Publicacionley) {
    this.publicacionleyService.selectedPublicacionley = publicacionley;
  }

  deletePublicacionley(_id: string, form: NgForm) {
    if(confirm('¿Esta seguro de eliminar?')) {
      this.publicacionleyService.deletePublicacionley(_id)
        .subscribe(res => {
          this.getPublicacionleys();
          this.resetForm(form);
          M.toast({html: 'Eiminado'});
        });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.publicacionleyService.selectedPublicacionley = new Publicacionley();
    }
  }

}