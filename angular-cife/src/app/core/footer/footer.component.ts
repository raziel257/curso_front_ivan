import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  autor: string;
  empresa: string;
  fecha: Date;

  constructor() { }

  ngOnInit() {
    this.autor = 'Iván Feel';
    this.empresa = 'Cife';
    this.fecha = new Date();
    
  }

}
