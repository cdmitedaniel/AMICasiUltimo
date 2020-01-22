import { Component, OnInit, Input } from '@angular/core';
import { LeyService } from '../../services/ley.service';
import { Ley } from '../../models/ley';
import {Router} from "@angular/router"


@Component({
  selector: 'app-ley-item',
  templateUrl: './ley-item.component.html',
  styleUrls: ['./ley-item.component.css']
})
export class LeyItemComponent implements OnInit {
  @Input() ley : Ley;

  constructor(private leyService: LeyService, private router: Router ) { }

  ngOnInit() {
    this.leyService.selectedLey = this.ley;
  }

 

}


