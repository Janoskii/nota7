import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';   //
import { AlertController, Platform } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { ToastController } from '@ionic/angular';
import { Usuario } from './usuario';
import { Seccion } from './seccion';
import { Asistencia } from './asistencia';
@Injectable({
  providedIn: 'root'
})
export class DbService {
  public database: SQLiteObject;
  private isDbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);
  //crecion tablas
  tipos: string = "CREATE TABLE IF NOT EXISTS tipo(id INTEGER PRIMARY KEY autoincrement,tipo VARCHAR(15) NOT NULL);";
  usuario: string = "CREATE TABLE IF NOT EXISTS user( rut VARCHAR(12) PRIMARY KEY,correo TEXT NOT NULL, nombre VARCHAR(100), contra VARCHAR(25) NOT NULL, fn TEXT NOT NULL,tipoId INTEGER NOT NULL, FOREIGN KEY(tipoId) REFERENCES tipo(id)ON DELETE CASCADE ON UPDATE CASCADE);";
  seccion: string = "CREATE TABLE IF NOT EXISTS seccion( id INTEGER PRIMARY KEY autoincrement, nombreS TEXT NOT NULL,  prof TEXT NOT NULL, userRut VARCHAR(12), FOREIGN KEY(userRut) REFERENCES user(rut)ON DELETE CASCADE ON UPDATE CASCADE);";
  asistencia: string = "CREATE TABLE IF NOT EXISTS asistencia( id INTEGER PRIMARY KEY autoincrement,alumno TEXT NOT NULL, fecha TEXT NOT NULL, prof TEXT NOT NULL,sec TEXT NOT NULL,seccionId INTEGER NOT NULL, userRut VARCHAR(12), FOREIGN KEY(seccionId) REFERENCES seccion(id)ON DELETE CASCADE ON UPDATE CASCADE, FOREIGN KEY(userRut) REFERENCES user(rut)ON DELETE CASCADE ON UPDATE CASCADE);";
  //poblados
  tipoA: string = "INSERT or IGNORE INTO tipo( id, tipo ) VALUES (1,'Admin');";
  tipoB: string = "INSERT or IGNORE INTO tipo( id, tipo ) VALUES (2,'Profesor');";
  tipoC: string = "INSERT or IGNORE INTO tipo( id, tipo ) VALUES (3,'Alumno');";
  usuarios: string = " INSERT or IGNORE INTO user(rut,correo,nombre,contra,fn,tipoId) VALUES ('11.111.111-1', 'admin@admin.cl', 'ADMIN', 'admin', '26 Oct, 2000',1);";
  profesor: string = "INSERT or IGNORE INTO user(rut,correo,nombre,contra,fn,tipoId) VALUES ('22.222.222-2', 'admin@profesor.cl', 'Jorge', '123', '16 Oct, 2000',2);";
  alumno: string = "INSERT or IGNORE INTO user(rut,correo,nombre,contra,fn,tipoId) VALUES ('33.333.333-3', 'admin@alumno.cl', 'Andres', '123', '19 Oct, 2000',3);";
  sec: string ="INSERT or IGNORE INTO seccion(id,nombreS,prof,userRut) VALUES(1,'Lenguaje','Matias','22.222.222-2');";
  as: string ="INSERT or IGNORE INTO asistencia(id,alumno,fecha,prof,sec,seccionId,userRut) VALUES(1,'Victor','Asistio el Día:12/12/2021 16:23:00','Alejandro','Lenguaje',1,'21.226.333-3')"
  Usuarios = new BehaviorSubject([]);
  Asistencias = new BehaviorSubject([]);
  Secciones = new BehaviorSubject([]);

  constructor(private sqlite: SQLite, private platform: Platform, public alertController: AlertController, private toastController: ToastController) {
    this.crearBD();
  }
  
  crearBD() {
    this.platform.ready().then(() => {
      this.sqlite.create({
        name: 'asbd3.db',
        location: 'Default'

      }).then((Database: SQLiteObject) => {
        this.database = Database;
        this.crear();
      }).catch(e => {
        this.presentAlert(e, "Error Creación de BD");
      })
    })
  }
  async crear() {
    try {
      await this.database.executeSql(this.tipos, []);
      await this.database.executeSql(this.tipoA, []);
      await this.database.executeSql(this.tipoB, []);
      await this.database.executeSql(this.tipoC, []);
      await this.database.executeSql(this.usuarios, []);
      await this.database.executeSql(this.usuario, []);
      await this.database.executeSql(this.profesor, []);
      await this.database.executeSql(this.alumno,[]);
      await this.database.executeSql(this.seccion, []);
      await this.database.executeSql(this.sec,[]);  
      await this.database.executeSql(this.asistencia, []);
      await this.database.executeSql(this.as,[]);
      this.listarsec();
      this.listarUser();
      this.listarAs();
      this.isDbReady.next(true);
    } catch (e) {
      this.presentAlert("Error al crear  base de datos", e);
    }
  }
  dbState() {
    return this.isDbReady.asObservable();
  }
  fetchUser(): Observable<Usuario[]> {
    return this.Usuarios.asObservable();

  }
  listarUser() {
    return this.database.executeSql('SELECT * FROM user', []).then(res => {
      let items: Usuario[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) {
          items.push({
            id_usuario: res.rows.item(i).id_usuario,
            rut: res.rows.item(i).rut,
            correo: res.rows.item(i).correo,
            nombre: res.rows.item(i).nombre,
            contra: res.rows.item(i).contra,
            id_rol: res.rows.item(i).id_rol,
          });
        }
      }
      this.Usuarios.next(items);
    });
  }
  nuevo(rut, correo, nombre, contra, fn, tipoId) {
    let data = [rut, correo, nombre, contra, fn, tipoId];
    return this.database.executeSql('INSERT INTO user (rut,correo,nombre,contra,fn,tipoId) VALUES (?,?,?,?,?,?)', data)
      .then(res => {
        this.listarUser();
      })
  }
  tipo(rut, tipoId) {
    let data = [tipoId, rut];
    return this.database.executeSql('UPDATE user SET tipoId = ? WHERE rut =?', data)
      .then(data2 => {
        this.listarUser();
      })
  }
  borrar(rut) {
    return this.database.executeSql('DELETE FROM user WHERE rut= ?', [rut])
      .then(data => {
        this.listarUser();
      })
  }
  login(rut, contra) {
    let log = [rut, contra]
    return this.database.executeSql("Select * from usuario Where nombre=? and contra=?", [log[0], log[1]])
      .then(res => {
        let items: Usuario[] = [];
        if (res.rows.length > 0) {
          for (var i = 0; i < res.rows.length; i++) {
            items.push({
              id_usuario: res.rows.item(i).id_usuario,
              rut: res.rows.item(i).rut,
              correo: res.rows.item(i).correo,
              nombre: res.rows.item(i).nombre,
              contra: res.rows.item(i).contra,
              id_rol: res.rows.item(i).id_rol,
            });

          }


          return true;
        }


        else {
          return false;
        }
      })
  }



  nseccion(nombreS, prof, userRut) {
    let data = [ nombreS, prof, userRut];
    return this.database.executeSql('INSERT INTO seccion (nombreS, prof,userRut) VALUES (?,?,?)', data)
      .then(res => {
        this.listarsec();
      })
  }
  fetchSec(): Observable<Seccion[]> {
    return this.Secciones.asObservable();
    
  }
  listarsec() {
    return this.database.executeSql('SELECT * FROM seccion', []).then(res => {
      let items: Seccion[] = [];

      if (res.rows.length > 0) {

        for (var i = 0; i < res.rows.length; i++) {

          items.push({
            id: res.rows.item(i).id,
            nombreS: res.rows.item(i).nombreS,
            prof: res.rows.item(i).prof,
            userRut: res.rows.item(i).userRut,
          });
        }
      }

      this.Secciones.next(items);
    });
  }
  del(id) {
    return this.database.executeSql('DELETE FROM seccion WHERE id= ?', [id])
      .then(_ => {
        this.listarsec();
      })
  }


  listarAs() {
    return this.database.executeSql('SELECT * FROM asistencia', []).then(res => {
      let items: Asistencia[] = [];

      if (res.rows.length > 0) {

        for (var i = 0; i < res.rows.length; i++) {

          items.push({
            id: res.rows.item(i).id,
            alumno: res.rows.item(i).alumno,
            fecha: res.rows.item(i).fecha,
            prof: res.rows.item(i).prof,
            sec: res.rows.item(i).sec,
            seccionId: res.rows.item(i).seccionId,
            userRut: res.rows.item(i).userRut
          });
        }
      }

      this.Asistencias.next(items);
    });
  }

  regisAs(alumno,fecha,prof,sec,seccionId,userRut){
    let data = [ alumno,fecha,prof,sec,seccionId,userRut];
    return this.database.executeSql('INSERT INTO asistencia (alumno,fecha,prof,sec,seccionId,userRut) VALUES (?,?,?,?,?,?)', data)
      .then(res => {
        this.listarAs();
      })
      
  }
  fetchAs(): Observable<Asistencia[]> {
    return this.Asistencias.asObservable();
  }

  async presentAlert(titulo: string, mensaje: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensaje,
      buttons: ['ok']
    });


    await alert.present();
  } async presentToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000

    });
    toast.present();
  }

}
