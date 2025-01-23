import { Injectable } from '@angular/core';
import { Aviso } from '../entidades/aviso';
import { Preferences } from '@capacitor/preferences'

@Injectable({
  providedIn: 'root'
})
export class RepositorioAvisosService {

private clave = "avisos";

  constructor() { }

  async recuperarAvisos():Promise<Aviso[]> {
    const listado = await Preferences.get({key: this.clave})
    return JSON.parse( listado.value ?? "[]");
  }

  async guardarAviso(aviso:Aviso){
    const listado:Aviso[] = await this.recuperarAvisos()
    let id = 0;
    if(listado?.length>0){
      id = (listado?.length?listado?.length:0); //sistema para generar automaticamente una id
    }
    aviso.id = id + 1;
    listado.push(aviso)
    await Preferences.set({key: this.clave, value: JSON.stringify(listado)});
  }

  async quitarAviso(id: number): Promise<void> {
    let listado = await this.recuperarAvisos()
    listado = listado.filter((aviso: Aviso) => aviso.id !==id)
    await Preferences.set({key: this.clave, value: JSON.stringify(listado)})
  } 
}
