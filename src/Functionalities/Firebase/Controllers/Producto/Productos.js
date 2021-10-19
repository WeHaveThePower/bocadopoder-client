import { getFirestore } from 'firebase/firestore';
import { addDoc, collection, getDocs, query, updateDoc, doc /*getDoc, deleteDoc*/ } from 'firebase/firestore'

import { initializeApp } from "firebase/app";
import { firebaseConfig } from '../../config-firebase';

initializeApp(firebaseConfig);

const database = getFirestore();

export const guardarDatabase = async (nombreColeccion, data) => {

  try {
    const respuesta = await addDoc(collection(database, nombreColeccion), data)
    return respuesta;
  } catch (e) {
    return false;
  }

}
  
// getAll()
export const consultarDatabase = async (nombreDatabase) => {
  try {
    const response = await getDocs(query(collection(database, nombreDatabase)));
    const elementos = response.docs.map((doc) => {
      const document = {
        dbid: doc.id,
        ...doc.data(),
      };
      return document;
    });
    console.log(elementos);
    return elementos;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const actualizarDocumentoDatabase = async (nombreDatabase, id, data) => {
    try {
        const response = await updateDoc(doc(database, nombreDatabase, id), data);
        console.log(response);
    } catch (error) {
        throw new Error(error.message);
    }
};