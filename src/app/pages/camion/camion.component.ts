import { Component } from '@angular/core';
import { Camion } from '../../models/camion.model';
import { CamionService } from '../../services/camion.service';
import { FormsModule } from '@angular/forms';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-camion',
  imports: [FormsModule],
  templateUrl: './camion.component.html',
  styleUrl: './camion.component.css'
})
export class CamionComponent {
  camiones:any;
  camion= new Camion();

  constructor(private camionService: CamionService) {
      this.getCamiones();
    }
    
    // Método para obtener todos los libros
    async getCamiones(): Promise<void> {
      this.camiones = await firstValueFrom(this.camionService.getCamiones());
    }
  
  //metodo para insertar un libro desde el form
  
  insertarCamion(){
    this.camionService.agregarCamion(this.camion);
    this.camion = new Camion();
    this.getCamiones();
  }
  //metodo para seleccionar un libro de la tabla
  selectCamion(camionSeleccionado:Camion){
    this.camion = camionSeleccionado;
  }
  //metodo para modificar libro en form
  updateCamion(){
    this.camionService.modificarCamion(this.camion);
    this.camion = new Camion();
    this.getCamiones();
  }
  //metodo para eliminar libro
  deleteCamion(){
    this.camionService.eliminarCamion(this.camion);
    this.camion = new Camion();
    this.getCamiones();
  }




}
