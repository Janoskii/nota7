import { Component, OnInit } from '@angular/core';
import { ApirestService } from '../service/apirest.service';

@Component({
  selector: 'app-edi-horario',
  templateUrl: './edi-horario.page.html',
  styleUrls: ['./edi-horario.page.scss'],
})
export class EdiHorarioPage implements OnInit {
  message: string;

  users: any;
  ramos: any;
  asignatura: any;
  seccion: any;

  constructor(private api: ApirestService) { 
  }


  ngOnInit() {
  this.api.getramos().subscribe((res)=>{
    this.ramos=res;
  },(error)=>{
    //this.message=error;
    console.log(error);
  });

  }


}


