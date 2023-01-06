import { Component, OnInit } from '@angular/core';
import { CameraService } from '../service/camera.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})

export class PerfilPage implements OnInit{
  foto:any;


  constructor( private serv: CameraService ) { }


  tomarf(){
    this.serv.takePicture();

  }
  // sucribirese a la foto y guardar foto
  ngOnInit(){
    this.serv.devol().subscribe(res=>{
      this.foto = res;
    });
  }

}
