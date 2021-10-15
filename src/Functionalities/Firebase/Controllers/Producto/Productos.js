import { getFirestore } from 'firebase/firestore';
import { addDoc, collection, getDocs, query, getDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore'


import { initializeApp } from "firebase/app";
import { firebaseConfig } from '../../config-firebase';

const dbManager = initializeApp(firebaseConfig);
console.log(dbManager)

const database = getFirestore();

export const guardarDatabase = async (nombreColeccion, data) => {

    try {
      const respuesta = await addDoc(collection(database, nombreColeccion), data)
      console.log(respuesta);
      return respuesta
    } catch (e) {
      throw new Error(e)
    }
  
  }
  
  // getAll()
  export const consultarDatabase = async (nombreColeccion) => {
    try {
      const respuesta = await getDocs(query(collection(database, nombreColeccion)))
      // console.log(respuesta);
  
      const coleccionDatos = respuesta.docs.map((documento) => {
        // console.log(documento);
        // console.log(documento.data());
        const documentoTemporal = {
          id: documento.id,
          ...documento.data()
        }
        // console.log(documentoTemporal);
        return documentoTemporal
      })
  
      return coleccionDatos
    } catch (e) {
      throw new Error(e)
    }
  }