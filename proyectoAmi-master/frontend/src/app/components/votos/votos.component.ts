import { Component, OnInit, ɵConsole } from '@angular/core';
import { NgForm } from '@angular/forms';
import { VotosService } from '../../services/votos.service';
import { Votos } from '../../models/votos';

declare var M: any;

@Component({
  selector: 'app-votos',
  templateUrl: './votos.component.html',
  styleUrls: ['./votos.component.css'],
  providers: [ VotosService ]

})
export class VotosComponent implements OnInit {

  constructor(public votosService: VotosService) { }

  ngOnInit() {
    this.getVotos();
  }

  addVoto(form?: NgForm) {
    console.log(form.value);
    if(form.value._id) {
      this.votosService.putVoto(form.value)
        .subscribe(res => {
            this.resetForm(form);
            this.getVotos();
            M.toast({html: 'voto actualizado'});
        });
    } else {
      this.votosService.postVoto(form.value)
      .subscribe(res => {
        this.getVotos();
        this.resetForm(form);
        M.toast({html: 'voto guardado'});
      });
    }
  }

  getVotos() {
    this.votosService.getVotos()
    .subscribe(res => {
      this.votosService.votos = res as Votos[];
    });
  }

  editVoto(voto: Votos) {
    this.votosService.selectedVotos = voto;
  }

  deleteVoto(_id: string, form: NgForm) {
    if(confirm('¿Esta seguro de eliminar?')) {
      this.votosService.deleteVoto(_id)
        .subscribe(res => {
          this.getVotos();
          this.resetForm(form);
          M.toast({html: 'Eiminado'});
        });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.votosService.selectedVotos = new Votos();
    }
  }

}

