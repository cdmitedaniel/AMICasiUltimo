import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LeyService } from '../../services/ley.service';
import { Ley } from '../../models/ley';

declare var M: any;
@Component({
  selector: 'app-ley',
  templateUrl: './ley.component.html',
  styleUrls: ['./ley.component.css'],
  providers: [LeyService]
})
export class LeyComponent implements OnInit {

  constructor(public leyService: LeyService) { }

  ngOnInit() {
    this.getLeyes();
  }

  addLey(form?: NgForm) {
    console.log(form.value);
    if (form.value._id) {
      this.leyService.putLey(form.value)
        .subscribe(res => {
          this.resetForm(form);
          this.getLeyes();
          M.toast({ html: 'ley actualizada' });
        });
    } else {
      this.leyService.postLey(form.value)
        .subscribe(res => {
          this.getLeyes();
          this.resetForm(form);
          M.toast({ html: 'ley Guardado' });
        });
    }

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

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.leyService.selectedLey = new Ley();
    }
  }
}