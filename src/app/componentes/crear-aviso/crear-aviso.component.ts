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
    
async () => { } //la ampolleta me hizo poner esto aqui, asi que lo puse
}

  ngOnInit() {}

  async agregarAviso(){
    const aviso:Aviso = {titulo:this.titulo,descripcion:this.descripcion,fecha:new Date()}
    //la fecha se establece automaticamente en la fecha actual
    console.log("Aviso agregado")
    await this.servicio.guardarAviso(aviso)
    await this.router.navigate(["/home"]);//usar var para rutas
  }

}
