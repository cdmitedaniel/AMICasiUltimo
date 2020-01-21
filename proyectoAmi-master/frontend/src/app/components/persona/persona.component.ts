import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../../services/persona.service';
import { Persona } from '../../models/persona';

declare var M: any;

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css'],
  providers: [PersonaService]
})
export class PersonaComponent implements OnInit {

  constructor(public personaService: PersonaService) { }

  ngOnInit() {
    this.getPersonas();
  }

  addPesona(form?: NgForm) {
    console.log(form.value);
    if (form.value._id) {
      this.personaService.putPersona(form.value)
        .subscribe(res => {
          this.resetForm(form);
          this.getPersonas();
          M.toast({ html: 'persona actualizada' });
        });
    } else {
      this.personaService.postPersona(form.value)
        .subscribe(res => {
          this.getPersonas();
          this.resetForm(form);
          M.toast({ html: 'persona Guardado' });
        });
    }

  }

  getPersonas() {
    this.personaService.getPersonas()
      .subscribe(res => {
        this.personaService.personas = res as Persona[];
      });
  }

  editPersona(persona: Persona) {
    this.personaService.selectedPersona = persona;
  }

  deletePersona(_id: string, form: NgForm) {
    if (confirm('¿Esta seguro de eliminar?')) {
      this.personaService.deletePersona(_id)
        .subscribe(res => {
          this.getPersonas();
          this.resetForm(form);
          M.toast({ html: 'Eiminado' });
        });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.personaService.selectedPersona = new Persona();
    }
  }


}
