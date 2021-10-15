import {React , Fragment, useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { nanoid } from 'nanoid'

import { guardarDatabase } from '../../../Functionalities/Firebase/Controllers/Producto/Productos'
import { ModalModal } from '../MenuProductos/ModalModal'


export function Registrarproducto({ closeAction }) {
    const [stRegistro, setStRegistro] = useState({id:'Generar  > >', descripcion:'', valor:'', estado:true}); //, estado:true

    //Modal grandpa's managing
    const [openM, setOpenM] = useState(false);
    const hdlOpenM = () => setOpenM(true);
    const hdlCloseM = () => setOpenM(false);

    const hdlAsignID = ()=>{ setStRegistro((prevState)=>({...prevState, id:nanoid(8)})) }

    const hdlDesc = (e)=>{ setStRegistro((prevState)=>({...prevState, descripcion:e.target.value})) }
    
    const hdlVal = (e)=>{ setStRegistro((prevState)=>({...prevState, valor:e.target.value})) }

    const hdlClose = ()=>{ closeAction(); };

    const hdlForm = async (e)=>{
        e.preventDefault();
        let id = stRegistro.id, desc = stRegistro.descripcion, val = stRegistro.valor;
        if(id === 'Generar  > >' || desc.trim() === '' || val.trim() === ''){
            alert('Faltan datos');
            return;
        }
        
        guardarDatabase('productos', stRegistro)
        hdlOpenM();
        
        setStRegistro({id:'Generar  > >', descripcion:'', valor:'', estado:true})
        // hdlClose();
    }

    // useEffect(()=>{

    // }, [openM])

    return (
        <Fragment>
            <p>Ingrese los datos del nuevo producto.</p>
            <form id="forma-registro-prod" onSubmit={hdlForm}>
                <div className="mb-3">
                    <label className="form-label" htmlFor="inputProductID">
                        ID del producto </label>
                    <input onClick={hdlAsignID} value={stRegistro.id} disabled className="form-control" id="inputProductID" aria-describedby="emailHelp"/>
                    <button type="button" className="float-end" onClick={hdlAsignID}>
                        generar </button>
                    <div className="form-text" id="emailHelp">Procure que este valor sea único</div>
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="modalInputProductName">
                        Descripción </label>
                    <input value={stRegistro.descripcion} onChange={hdlDesc} placeholder="" className="form-control" id="modalInputProductName" type="text" name="q"/>
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="modalInputProductPrice">
                        Valor Unitario </label>
                    <input value={stRegistro.valor} onChange={hdlVal} className="form-control" id="modalInputProductPrice" type="text"/>
                    {/* <BotonModal btnNumber={4} btnName={"Estado del Registro"}/> */}
                </div>
                <button className="btn btn-primary" type="submit">
                    Registrar </button>
            </form>
            <ModalModal modalName={'Estado del Registro'} modalNumber={4} openMe={openM} closeFunc={hdlCloseM} />
        </Fragment>
    )
}
