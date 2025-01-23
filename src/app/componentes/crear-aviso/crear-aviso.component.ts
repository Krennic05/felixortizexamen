import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IonList, IonItem, IonInput, IonIcon, IonButton, IonText } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons'
import { addCircleOutline } from 'ionicons/icons'
import { FormsModule } from '@angular/forms'
import { RepositorioAvisosService } from 'src/app/servicios/repositorio-avisos.service';
import { Aviso } from 'src/app/entidades/aviso';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-aviso',
  templateUrl: './crear-aviso.component.html',
  styleUrls: ['./crear-aviso.component.scss'],
  imports: [FormsModule, IonList, IonItem, IonInput, IonIcon, IonButton, IonText],
  standalone: true,
})
export class CrearAvisoComponent  implements OnInit {
  
  titulo:string = ""
  descripcion:string = ""
  @Output() onAvisoAgregado = new EventEmitter<string[]>()

  constructor(
    private servicio:RepositorioAvisosService,
    private router: Router, //var para rutas
  ) {
    addIcons({addCircleOutline}),
    
async () => { //la ampoyetita me decia que esto va aqui
    //  [routerLink]="['/app-home']" //aqui comparaba direccion, estaba equibocada, era home x'D
  }
}

  ngOnInit() {}

  async agregarAviso(){
    // this.onAvisoAgregado.emit([this.titulo,this.descripcion])
    // this.titulo = ""
    // this.descripcion = ""
    const aviso:Aviso = {titulo:this.titulo,descripcion:this.descripcion}
    console.log("Aviso agregado")
    await this.servicio.guardarAviso(aviso)
    await this.router.navigate(["/home"]);//usar var para rutas
  }

}
