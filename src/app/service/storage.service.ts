/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { BehaviorSubject } from 'rxjs';
import { Iusers } from '../interfaces/iusers';


@Injectable({
  providedIn: 'root',
})
export class StorageService {
  usersdb: Iusers[]=[];
  admin: void;
  isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);
  private _storage: Storage | null = null;
  constructor(private storage: Storage, private platform: Platform) {
    this.init();
    this.getUser();
  }

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    this._storage = storage;
    this.creartest();
    this.creartest2();
    this.creartest3();
    this.creartest4();
    this.creartest5();
  }

  

  async getUser(){
    const myusersdb = await this.storage.get('usersdb');
    if (myusersdb) {
      this.usersdb = myusersdb;
    }
  }


  isAuth() {
    return this.isAuthenticated.value;
  }

  creartest(){
    this.platform.ready().then(() => {
      this.usersdb.unshift({strUser:'v.rosendo5',strPass:'J.12mm5'});
      this._storage.set('usersdb',this.usersdb);
    });  
  }

  creartest2(){
    this.platform.ready().then(() => {
      this.usersdb.unshift({strUser:'j.baez5',strPass:'B.34vf5'});
      this._storage.set('usersdb',this.usersdb);
    });  
  }

  creartest3(){
    this.platform.ready().then(() => {
      this.usersdb.unshift({strUser:'a.diaz5',strPass:'C.54yt75'});
      this._storage.set('usersdb',this.usersdb);
    });  
  }

  creartest4(){
    this.platform.ready().then(() => {
      this.usersdb.unshift({strUser:'se.carcamo',strPass:'123'});
      this._storage.set('usersdb',this.usersdb);
    });  
  }
  creartest5(){
    this.platform.ready().then(() => {
      this.usersdb.unshift({strUser:'ben.gutierrez',strPass:'123'});
      this._storage.set('usersdb',this.usersdb);
    });  
  }


  
//dasda
  validLogin(user: string,pass: string) {
    if (this.usersdb.find(usr=>usr.strUser === user && usr.strPass === pass)){
      this.isAuthenticated.next(true);
      return this.usersdb.find(usr=>usr.strUser === user && usr.strPass === pass);
    }}

    async saveUser(user: string,pass: string){
      const exist=this.usersdb.find(u=>u.strUser === user);
      if (!exist) {
        this.usersdb.unshift({strUser:user, strPass:pass});
        this._storage.set('usersdb',this.usersdb);
        console.log('Usuario guardado');
      } else {
        console.log('Usuario ya existe');
      }
    }
  }