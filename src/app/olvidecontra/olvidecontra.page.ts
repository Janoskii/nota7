import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-olvidecontra',
  templateUrl: './olvidecontra.page.html',
  styleUrls: ['./olvidecontra.page.scss'],

})



export class OlvidecontraPage implements OnInit {
  Var1: String = "";
  Var2: String = "";
  Var3: String = "";

  constructor(private route: Router, public toastController:ToastController) {}

  update(){
    if(
      this.Var1 != "" &&
      this.Var2 != "" &&
      this.Var3 != "") {
        if(this.Var3 == this.Var2) {
          this.route.navigate(['/login']);
        }
        else{ this.presentToast("Correo y/o contraseña incorrecta")
        }
    }else{
      this.presentToast("Revise su correo")
  }
  }

  ngOnInit() {
  }
  async presentToast(message: string, duration?: number) {
    const toast = await this.toastController.create(
      {
        message: message,
        duration: duration ? duration : 3000
      }
    );
    toast.present();
  }

}
