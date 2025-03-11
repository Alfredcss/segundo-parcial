import { Injectable, inject } from '@angular/core';
import { Camion } from '../models/camion.model';
import { first } from 'rxjs';
import { collection, collectionData,deleteDoc,Firestore,updateDoc } from '@angular/fire/firestore';
import { addDoc,doc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class CamionService {
  private db: Firestore = inject(Firestore);

  constructor() { }

  getCamiones(){
    const camionesCollection = collection(this.db, 'camiones');
    return collectionData(camionesCollection,{idField: 'id'})
      .pipe(first());
  }

  async agregarCamion(camion: Camion) {
      const camionesCollection = collection(this.db, 'camiones');
      const camionData = {
        nombre: camion.nombre,
        salida: camion.salida,
        destino: camion.destino,
        numeroDeEjes: camion.numeroDeEjes,
        capacidad: camion.capacidad
      };
      await addDoc(camionesCollection, camion);
    }

  async modificarCamion(camion: Camion){
    const documentRef = doc(this.db, 'camiones', camion.id);
    await updateDoc(documentRef, {
      nombre: camion.nombre,
      salida: camion.salida,
      destino: camion.destino,
      numeroDeEjes: camion.numeroDeEjes,
      capacidad: camion.capacidad
    });
  }
  async eliminarCamion(camion: Camion){
    const documentRef = doc(this.db, 'camiones', camion.id);
    await deleteDoc(documentRef);
  }
}
