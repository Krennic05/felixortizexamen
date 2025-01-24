import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Aviso } from 'src/app/entidades/aviso';
import { IonButton, IonIcon, IonModal, IonButtons, IonHeader, IonContent, IonTitle} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { trashOutline } from 'ionicons/icons'


@Component({
  selector: 'app-aviso-lista',
  templateUrl: './aviso-lista.component.html',
  styleUrls: ['./aviso-lista.component.scss'],
  imports:[IonHeader, IonContent, IonModal, CommonModule, IonButton, IonButtons, IonIcon, IonTitle],
  standalone: true,
})
export class AvisoListaComponent  implements OnInit {

  @Input() avisos: Aviso[] = []
  @Output() eventoEliminar = new EventEmitter<number>()

  isModalOpen:boolean = false
  idAviso?:number = -1 
  // estas variables permiten operar la ventana modal y emitir lo necesario para eliminar el aviso seleccionado 

  constructor() { 
    addIcons({trashOutline})
  }

  ngOnInit() {}

  setModalOpen(abierto:boolean){
    this.isModalOpen = abierto
  }

  clickEliminar(a:Aviso){
    this.idAviso = a.id
    
    this.setModalOpen(true) //
  }

  confirmarEliminacion(borrar:boolean){
    if(borrar){
      this.eventoEliminar.emit(this.idAviso)
    }
    else{
      this.idAviso = -1
    }
    this.setModalOpen(false)
  }

}
