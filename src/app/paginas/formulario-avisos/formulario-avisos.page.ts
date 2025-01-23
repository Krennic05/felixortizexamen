import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { CrearAvisoComponent } from "../../componentes/crear-aviso/crear-aviso.component";

@Component({
  selector: 'app-formulario-avisos',
  templateUrl: './formulario-avisos.page.html',
  styleUrls: ['./formulario-avisos.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, CrearAvisoComponent]
})
export class FormularioAvisosPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
