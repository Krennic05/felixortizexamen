import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Aviso } from 'src/app/entidades/aviso';
import { IonButton, IonIcon} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { trashOutline } from 'ionicons/icons'

@Component({
  selector: 'app-aviso-lista',
  templateUrl: './aviso-lista.component.html',
  styleUrls: ['./aviso-lista.component.scss'],
  imports:[CommonModule, IonButton, IonIcon],
  standalone: true,
})
export class AvisoListaComponent  implements OnInit {

  @Input() avisos: Aviso[] = []
  @Output() eventoEliminar = new EventEmitter<Aviso>()

  constructor() { 
    addIcons({trashOutline})
  }

  ngOnInit() {}

  clickEliminar(a:Aviso){
    this.eventoEliminar.emit(a)
  }

}
