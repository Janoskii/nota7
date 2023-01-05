import { Injectable } from '@angular/core';
import { Camera, CameraOptions} from '@awesome-cordova-plugins/camera/ngx'
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CameraService {

  constructor(private camera: Camera) { }

  imagens: any;
  img= new BehaviorSubject([]); //creacion de obesrvable

  takePicture() {
    const options: CameraOptions = {
      quality: 99,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    };

    this.camera.getPicture(options).then(
      (imageData) => {
        this.imagens = 'data:image/jpeg;base64,' + imageData; //guardar la fota en una vatriable
        this.img.next(this.imagens); //guardar la foto en un observable
      },
      (err) => {
        // Handle error
        console.log('Camera issue: ' + err);
      }
    );
  }

  devol(): Observable<any>{
    return this.img.asObservable(); //como devolver un observable
  }
}
