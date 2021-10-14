import {React , Fragment} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { nanoid } from 'nanoid'
import { useState } from 'react'
import { BotonModal } from '../MenuProductos/BotonModal'


export function Registrarproducto({ closeAction }) {
    const [stRegistro, setStRegistro] = useState({id:'Generar  > >', descripcion:'', valor:'', estado:true}); //, estado:true

    const hdlAsignID = ()=>{
        // const newReg = {...stRegistro}
        // newReg.id = nanoid(8)
        setStRegistro((prevState)=>({...prevState, id:nanoid(8)})) //{id:nanoid(8), descripcion:stRegistro.descripcion, valor:stRegistro.valor});
        //setStRegistro({id:nanoid(8), descripcion:stRegistro.descripcion, valor:stRegistro.valor});
    }

    const hdlDesc = (e)=>{
        setStRegistro((prevState)=>({...prevState, descripcion:e.target.value}))
    }
    
    const hdlVal = (e)=>{
        setStRegistro((prevState)=>({...prevState, valor:e.target.value}))
    }

    const hdlClose = ()=>{
        closeAction();
    };

    const hdlForm = (e)=>{
        e.preventDefault();
        
        let id = stRegistro.id;
        let desc = stRegistro.descripcion;
        let val = stRegistro.valor;
        if(id === 'Generar  > >' || desc.trim() === '' || val.trim() === ''){
            alert('Faltan datos');
            return;
        }
        
        setStRegistro({id:'Generar  > >', descripcion:'', valor:'', estado:true})
        
        hdlClose();
    }

    return (
        <Fragment>
            <p>Ingrese los datos del nuevo producto.</p>
            <form id="forma-registro-prod" onSubmit={hdlForm}>
                {/* <!-- ID --> */}
                <div className="mb-3">
                    <label className="form-label" htmlFor="inputProductID">
                        ID del producto {/* <!-- txt --> */}
                    </label>
                    <input onClick={hdlAsignID} value={stRegistro.id} disabled className="form-control" id="inputProductID" aria-describedby="emailHelp"/>
                    <button type="button" class="float-end" onClick={hdlAsignID}>generar</button>
                    <div className="form-text" id="emailHelp">Procure que este valor sea único</div>
                </div>
                {/* <!-- Descripción --> */}
                <div className="mb-3">
                    <label className="form-label" htmlFor="modalInputProductName">
                        Descripción {/* <!-- txt --> */}
                    </label>
                    <input value={stRegistro.descripcion} onChange={hdlDesc} placeholder="" className="form-control" id="modalInputProductName" type="text" name="q"/>
                </div>
                {/* <!-- Precio --> */}
                <div className="mb-3">
                    <label className="form-label" htmlFor="modalInputProductPrice">
                        Valor Unitario {/*<!-- txt -->*/}
                    </label>
                    <input value={stRegistro.valor} onChange={hdlVal} className="form-control" id="modalInputProductPrice" type="text"/>
                    <BotonModal btnNumber={4} btnName={"Estado del Registro"}/>
                </div>
                <button className="btn btn-primary" type="submit" data-bs-toggle="modal" data-bs-target="#myModalProdSucces">Registrar</button>
            </form>
        </Fragment>
    )
}
