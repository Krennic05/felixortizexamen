import { Component } from '@angular/core';
import { AvisoListaComponent } from '../../componentes/aviso-lista/aviso-lista.component';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonButtons, IonIcon } from '@ionic/angular/standalone';
import { Aviso } from '../../entidades/aviso';
import { RepositorioAvisosService } from '../../servicios/repositorio-avisos.service';
import { addIcons } from 'ionicons';
import { addCircleOutline } from 'ionicons/icons';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [RouterLink, IonHeader, IonToolbar, IonTitle, IonContent, AvisoListaComponent, IonButton, IonButtons, IonIcon],
})
export class HomePage {

  listado:Aviso[] = []

  constructor(private servicio:RepositorioAvisosService) {
    addIcons({addCircleOutline})
  }

  ngOnInit() {
    this.cargaInicial();
  }

  async cargaInicial(){
    const a:Aviso = {titulo:"A",descripcion:"B",foto:"C"}
    await this.servicio.guardarAviso(a)
    this.listado = await this.servicio.recuperarAvisos();
  }

  borrarAviso(aviso:Aviso){
    console.log("Eliminando aviso: "+aviso.titulo)
    this.servicio.quitarAviso();
  }
}
