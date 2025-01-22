import { Injectable } from '@angular/core';
import { Aviso } from '../entidades/aviso';
import { Preferences } from '@capacitor/preferences'

@Injectable({
  providedIn: 'root'
})
export class RepositorioAvisosService {

private clave = "";

  constructor() { }

  async recuperarAvisos():Promise<Aviso[]> {
    const listado = await Preferences.get({key: this.clave})
    return JSON.parse( listado.value ?? "[]");
  }

  async guardarAviso(a:Aviso){
    const listado:Aviso[] = await this.recuperarAvisos()
    listado.push(a)
    Preferences.set({key: this.clave, value: JSON.stringify(listado)});
  }

  async quitarAviso(){
    const listado:Aviso[] = await this.recuperarAvisos()
    listado.slice()
    Preferences.remove({key: this.clave});
  } 
}
