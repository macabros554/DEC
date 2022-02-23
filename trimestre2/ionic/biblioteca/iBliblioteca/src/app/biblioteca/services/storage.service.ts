import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage-angular';
import { Doc } from 'src/app/interfaces/libroBibli';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _storage: Storage | null = null;

  listafavoritos:String[]=[];

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    this._storage = storage;
  }

  // Create and expose methods that users of this service can
  // call, for example:
  public async setStorage(key: string, value: any) {
    return await this._storage.set(key, value);
  }

  public async remover(key: string) {
    return await this._storage.remove(key);
  }

  public async getStorage() {
    this.storage.forEach((key, value, index) => {
      this.listafavoritos.push(value);
    });
  }

}
