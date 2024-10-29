import { Component, OnInit } from '@angular/core';
import { CompaniaService, CompaniaModel } from '../api.service';

@Component({
  selector: 'app-compania',
  templateUrl: './compania.component.html',
  styleUrls: ['./compania.component.css']
})
export class CompaniaComponent implements OnInit {
  companias: CompaniaModel[] = [];

  constructor(private companiaService: CompaniaService) { }

  ngOnInit(): void {
    this.companiaService.getCompanias().subscribe(data => {
      this.companias = data;
    });
  }
}
