import {React , Fragment} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { nanoid } from 'nanoid'
import { useState } from 'react'

export function PromptOkProducto({ closeAction }) {
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
        
        let jsonProd = stRegistro;
        console.log(jsonProd)
        setStRegistro({id:'Generar  > >', descripcion:'', valor:'', estado:true})
        
        hdlClose();
    }

    return (
        <Fragment>
            <form onSubmit={hdlForm}>
                <div className="mb-3">
                    <label className="form-label" htmlFor="inputProductID">
                        El registro fue {/* <!-- txt --> */}
                    </label>
                    <input value="EXITOSO" disabled className=" text-center form-control" id="inputProductID" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <p className="h5 text-center">
                        ID del registro::{nanoid(8)}
                    </p>
                </div>
            </form>
        </Fragment>
    )
}
