import { Component, OnDestroy, OnInit } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-gen-qr',
  templateUrl: './gen-qr.page.html',
  styleUrls: ['./gen-qr.page.scss'],
})
export class GenQRPage implements OnDestroy {

  //www.npmjs.com/package/angularx-qrcode
  qrCodeString = 'https://www.twitch.tv/janosskiill'; 
  scannedResult: any;
  content_visibility = '';
 
  constructor(private alertController: AlertController) {  }
  
  async checkPermission() {
    try {
      // check or request permission
      const status = await BarcodeScanner.checkPermission({ force: true});
      if (status.granted){
        // the user granted permission
        return true;
     }
      return false;
   } catch(e) {
    console.log(e);
   }
  }


	async startScan(){
    try {
      const permission = await this.checkPermission();
      if(!permission) {
        return;
      }
      await BarcodeScanner.hideBackground();
      document.querySelector('body').classList.add('scanner-active');
      this.content_visibility= 'hidden'
      const result = await BarcodeScanner.startScan();
      this.presentAlert("1 " + result + "");
      BarcodeScanner.showBackground();
      document.querySelector('body').classList.remove('scanner-active');
      this.content_visibility= '';
      if(result?.hasContent) {
        this.scannedResult = result.content;
        this.presentAlert("2 " + this.scannedResult);
      }
    }	catch(e) {
      console.log(e);
      this.stopScan();
    }
  }


  stopScan(){
    BarcodeScanner.showBackground();
    BarcodeScanner.stopScan();
    document.querySelector('body').classList.remove('scanner-active');
    this.content_visibility= '';
  }


  ngOnDestroy(): void {
    this.stopScan();
  }
  


  async presentAlert( mensaje: string) {
    const alert = await this.alertController.create({
      header: 'titulo',
      message: mensaje,
      buttons: ['ok']
    });


   



















  }

}