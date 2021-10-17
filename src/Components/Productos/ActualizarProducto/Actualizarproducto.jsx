// import {React , Fragment} from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import { nanoid } from 'nanoid'
// import { useState } from 'react'
// import { ModalModal } from '../MenuProductos/ModalModal'


// export function Actualizarproducto({ closeAction, props }) {
    
//     const loadDesc = 'Capuccino'
//     const loadValue = '7500'
//     const loadState = false

//     const [stRegistro, setStRegistro] = useState({id:props.id, descripcion: loadDesc, valor: loadValue, estado: loadState});

//     //Modal grandpa's managing
//     const [openM, setOpenM] = useState(false);
//     const hdlOpenM = () => setOpenM(true);
//     const hdlCloseM = () => setOpenM(false);

//     const hdlDesc = (e)=>{ setStRegistro((prevState)=>({...prevState, descripcion:e.target.value})) }
    
//     const hdlVal = (e)=>{ setStRegistro((prevState)=>({...prevState, valor:e.target.value})) }

//     const hdlForm = async (e)=>{
//         e.preventDefault();
//         let id = stRegistro.id, desc = stRegistro.descripcion, val = stRegistro.valor;
//         if(id === 'Generar  > >' || desc.trim() === '' || val.trim() === ''){
//             alert('Faltan datos');
//             return;
//         }
        
//         // updateDbDoc('productos', stRegistro)
//         hdlOpenM();
        
//         setStRegistro({id:'Generar  > >', descripcion:'', valor:'', estado:true})
//         // hdlClose();
//     }
    
//     return (
//         <Fragment>
//             <form onSubmit={hdlForm}>
//                 <div className="mb-3">
//                     <p className="h5 text-center">
//                         ID ::: {stRegistro.id}
//                     </p>
//                 </div>
//                 <p>-Ingrese los nuevos datos del producto-</p>
//                 <div className="mb-3">
//                     <label className="form-label" htmlFor="modalInputProductName">
//                         Nueva descripción
//                     </label>
//                     <input value={stRegistro.descripcion} onChange={hdlDesc} placeholder="" className="form-control" id="modalInputProductName" type="text" name="q"/>
//                 </div>
//                 <div className="mb-3">
//                     <label className="form-label" htmlFor="modalInputProductPrice">
//                         Nuevo valor Unitario
//                     </label>
//                     <input value={stRegistro.valor} onChange={hdlVal} className="form-control" id="modalInputProductPrice" type="text"/>
//                 </div>
//                 <button className="btn btn-primary" type="submit" data-bs-toggle="modal" data-bs-target="#myModalProdSucces">Actualizar</button>
//             </form>
//             <ModalModal modalName={'Estado de la Actualización'} modalNumber={5} openMe={openM} closeFunc={hdlCloseM} />
//         </Fragment>
//     )
// }
