import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {

  formudatos: FormGroup;
  isSubmitted = false;


  constructor(public formBuilder: FormBuilder, public menu: MenuController) {
    this.formudatos = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      carrera: ['', [Validators.required, Validators.minLength(2)]],
      telefono: ['', [Validators.required, Validators.pattern('^[0-9]+$'), Validators.minLength(9), Validators.maxLength(13)]],
      pass: ['', [Validators.required, Validators.minLength(8)]],



    });
    // this.formudatos = this.formBuilder.group({
    //   nombre: ['', [Validators.required, Validators.minLength(2)]],
    // }); 
    console.log(this.formudatos)

  }

  ngOnInit() {

  }
  ionViewWillEnter() {
    this.menu.enable(false);
  }
  ionViewDidLeave() {
    this.menu.enable(true);

  }



  submitForm() {

    if (!this.formudatos.valid) {
      console.log('EL FORMULARIO NO ESTA VALIDO!')
    } else {
      console.log('formulario correcto! GOD JOBS')

    }
  }



  // //-------------- cuando validemos usuarios ocupar*---------------------
  // public navigateToRegister (): void{

  // const navigationExtras: NavigationExtras = {
  //   state: {
  //     usuario: this.usuario
  //   }
  // };

  // this.router.navigate(['/registrar'], navigationExtras);
  // }
}


// this.alumno = {
//   nombre : this.alumno.nombre,
//   apellido : this.alumno.apellido, 
//   contrasena : this.alumno.contrasena, 
//   re_contrasena : this.alumno.re_contrasena,
//   pista : this.alumno.pista , 
// }